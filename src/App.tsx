import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  const x = useMotionValue(0);
  const rotateZByX = useTransform(x, [-800, 800], [-360, 360]);
  const gradientByX = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(70deg, rgb(107, 90, 255), rgb(97, 220, 251))",
      "linear-gradient(70deg, rgb(255, 90, 205), rgb(251, 218, 97))",
      "linear-gradient(70deg, rgb(255, 90, 90), rgb(255, 139, 62))",
    ]
  );
  const { scrollY, scrollYProgress } = useScroll();
  const scaleByScroll = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <Wrapper style={{ background: gradientByX }}>
      <Box
        style={{ x, rotateZ: rotateZByX, scale: scaleByScroll }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(70deg, rgb(255, 90, 205), rgb(251, 218, 97));
`;

const Box = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
