import styled from "styled-components";
import { motion } from "framer-motion";

export default function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "spring", damping: 10 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom left, #ff5acd, #fbda61);
`;

const Box = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
