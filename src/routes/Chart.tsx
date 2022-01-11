import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";

import { isDarkAtom } from "../atoms";

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 }
  );
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => {
                return {
                  x: price.time_close,
                  y: [
                    price.open.toFixed(3),
                    price.high.toFixed(3),
                    price.low.toFixed(3),
                    price.close.toFixed(3),
                  ],
                };
              }),
            },
          ]}
          options={{
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#ff7675",
                  downward: "#74b9ff",
                },
                wick: {
                  useFillColor: true,
                },
              },
            },
            xaxis: {
              type: "datetime",
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            yaxis: {
              labels: { show: true, formatter: (value) => value.toFixed(0) },
            },
            grid: { show: false },
            theme: { mode: isDark ? "dark" : "light" },
            chart: {
              type: "candlestick",
              width: "100%",
              height: 300,
              toolbar: { show: false },
              background: "transparent",
            },
          }}
        />
      )}
    </>
  );
}

interface ChartProps {
  coinId: string;
}

interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
