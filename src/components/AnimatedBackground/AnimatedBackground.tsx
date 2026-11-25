
import { motion, useReducedMotion } from "framer-motion";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="animated-background">
      <div className="background-grid" />

      <motion.div
        className="background-orb orb-blue"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 50, -20, 0],
                y: [0, 40, 70, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="background-orb orb-violet"
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -50, 30, 0],
                y: [0, -30, 50, 0],
                scale: [1, 0.9, 1.15, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="background-noise" />
    </div>
  );
};

export default AnimatedBackground;
