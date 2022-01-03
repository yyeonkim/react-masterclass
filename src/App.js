import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Title>Hello Theme</Title>
    </Wrapper>
  );
}

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export default App;
