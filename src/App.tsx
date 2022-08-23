import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const boxVariants = {
  hover: { scale: 1.2, rotate: 90 },
  tap: { borderRadius: "50%", scale: 0.8 },
  drag: { backgroundColor: "rgb(255, 221, 89)", transition: { duration: 0.1 } },
};

export default function App() {
  const x = useMotionValue(0);

  useEffect(() => {
    x.onChange(() => console.log(x.get()));
  }, [x]);

  return (
    <Wrapper>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
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
