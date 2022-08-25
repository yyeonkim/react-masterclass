import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Animation Variants

const boxes = [0, 1, 2, 4];

export default function App() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {boxes.map((box) => (
          <Box
            layoutId={`${box}`}
            onClick={() => {
              setId(`${box}`);
            }}
          />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            transition={{ default: { duration: 0.2 } }}
          >
            <Box layoutId={id} style={{ width: "40rem", height: "20rem" }} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(70deg, rgb(255, 90, 205), rgb(251, 218, 97));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 2rem;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: white;
  border-radius: 20px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
