import { useParams } from "react-router-dom";

export default function Coin() {
  interface RouteParams {
    coinId: string;
  }

  const { coinId } = useParams<RouteParams>();

  return <h1>Coin: {coinId}</h1>;
}
