import { useState } from "react";
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
  const { state } = useLocation<RouteState>();

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
