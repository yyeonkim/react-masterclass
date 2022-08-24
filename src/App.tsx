import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Animation Variants

const boxVariants = {
  entry: (back: boolean) => ({
    opacity: 0,
    x: back ? -200 : 200,
    scale: 0.5,
    transition: { duration: 0.5 },
  }),
  center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5 } },
  exit: (back: boolean) => ({
    opacity: 0,
    x: back ? 200 : -200,
    scale: 0.5,
    transition: { duration: 0.5 },
  }),
};

export default function App() {
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  const getNextSlider = () => {
    setBack(false);
    setVisible((prev) => (prev + 1) % 10);
  };
  const getPrevSlider = () => {
    setBack(true);
    setVisible((prev) => (prev + 9) % 10);
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible + 1}
        </Box>
      </AnimatePresence>
      <Buttons>
        <button onClick={getPrevSlider}>PREV</button>
        <button onClick={getNextSlider}>NEXT</button>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(70deg, rgb(255, 90, 205), rgb(251, 218, 97));
`;

const Box = styled(motion.div)`
  position: absolute;
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: white;
  border-radius: 40px;
  margin-bottom: 2rem;
`;

const Buttons = styled.button`
  position: absolute;
  bottom: 20rem;
`;
