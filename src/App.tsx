import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation Variants

export default function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked && (
          <Circle
            layoutId="circle"
            style={{ borderRadius: "50%", backgroundColor: "#00a5ff" }}
          />
        )}
      </Box>
      <Box>
        {clicked && (
          <Circle
            layoutId="circle"
            style={{ borderRadius: 0, backgroundColor: "#FEAE1A " }}
          />
        )}
      </Box>
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

const Box = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: white;
  border-radius: 40px;
  margin-bottom: 2rem;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;
