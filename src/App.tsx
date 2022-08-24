import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const x = useMotionValue(0);
  const scaleByX = useTransform(x, [-800, 0, 800], [0.1, 1, 2]);

  return (
    <Wrapper>
      <Box style={{ x, scale: scaleByX }} drag="x" dragSnapToOrigin />
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
