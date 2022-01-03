import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50px;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  span {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

export default App;
