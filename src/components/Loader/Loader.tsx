
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Loader.css";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = window.setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + increment, 100);

        if (next >= 100) {
          window.clearInterval(timer);
          window.setTimeout(onComplete, 350);
        }

        return next;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-screen"
        exit={{ opacity: 0, scale: 1.04 }}
        transition={{ duration: 0.7 }}
      >
        <div className="loader-content">

          <motion.div
            className="loader-logo"
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            H<span>.</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            HARSH<span>.</span>
          </motion.h2>

          <p className="loader-caption">
            FULL STACK MERN DEVELOPER
          </p>

          <div className="loader-progress-track">
            <motion.div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loader-bottom">
            <span>INITIALIZING EXPERIENCE</span>
            <span>{Math.round(progress)}%</span>
          </div>

        </div>

        <div className="loader-glow loader-glow-one" />
        <div className="loader-glow loader-glow-two" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
