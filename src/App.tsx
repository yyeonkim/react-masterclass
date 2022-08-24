import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [showing, setShowing] = useState(true);
  const toggleShowing = () => setShowing((prev) => !prev);

  return (
    <Wrapper>
      <button onClick={toggleShowing}>SHOW</button>
      <AnimatePresence>
        {showing && (
          <Box
            variants={boxVariants}
            initial="Initial"
            animate="visible"
            exit="exit"
          />
        )}
      </AnimatePresence>
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
  width: 40rem;
  height: 20rem;
  background-color: white;
  border-radius: 20px;
  position: absolute;
  top: 20rem;
`;

// Animation Variants

const boxVariants = {
  Initial: { opacity: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  exit: { opacity: 0, y: -20 },
};
