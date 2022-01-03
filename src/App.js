import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal" />
      <Box bgColor="tomato" />
      <Circle bgColor="skyblue" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

export default App;
