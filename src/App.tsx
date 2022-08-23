import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  hover: { scale: 1.2, rotate: 90 },
  tap: { borderRadius: "50%", scale: 0.8 },
};

export default function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="tap" />
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
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
