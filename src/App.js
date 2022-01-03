import styled, { keyframes } from "styled-components";

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        <Emoji>😍</Emoji>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
      border-radius: 40px;
  }
  100% {
    transform: rotate(0deg);
      border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.5s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

export default App;
