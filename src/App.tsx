import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  hover: { scale: 1.2, rotate: 90 },
  tap: { borderRadius: "50%", scale: 0.8 },
  drag: { backgroundColor: "rgb(255, 221, 89)", transition: { duration: 0.1 } },
};

export default function App() {
  const contraintsRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={contraintsRef}>
        <Box
          variants={boxVariants}
          drag
          dragConstraints={contraintsRef}
          dragSnapToOrigin
          dragElastic={0.5}
          whileDrag="drag"
          whileHover="hover"
          whileTap="tap"
        />
      </BiggerBox>
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

const BiggerBox = styled(motion.div)`
  width: 30rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
