import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Coin() {
  interface RouteParams {
    coinId: string;
  }

  interface RouteState {
    name: string;
  }

  const { coinId } = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});
  const { state } = useLocation<RouteState>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

const Container = styled.div`
  padding: 0px 2rem;
  max-width: 48rem;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 4.8rem;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
