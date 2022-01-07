import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

export default function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Closing price",
              data: data?.map((price) => Math.floor(price.close)),
            },
          ]}
          options={{
            xaxis: {
              type: "datetime",
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            theme: { mode: "dark" },
            chart: {
              width: 500,
              height: 300,
              toolbar: { show: false },
              background: "transparent",
            },
            colors: ["#1B9CFC"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#55E6C1"],
                stops: [0, 100],
              },
            },
            tooltip: {
              y: { formatter: (value) => `$ ${value.toFixed(3)}` },
            },
          }}
        />
      )}
    </div>
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
