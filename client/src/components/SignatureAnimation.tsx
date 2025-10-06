import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SignatureAnimation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 0.15,
      transition: {
        pathLength: {
          duration: 4,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.5
        }
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto opacity-30"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.path
          d="M 100 200 Q 150 100, 250 200 T 400 200"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-primary"
        />
        <motion.path
          d="M 420 180 Q 480 220, 520 180 Q 560 140, 600 180"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="text-primary"
        />
        <motion.path
          d="M 620 150 L 650 220 M 640 185 L 680 185"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 1 }}
          className="text-primary"
        />
        <motion.path
          d="M 700 160 Q 740 200, 780 160 Q 820 120, 860 160"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 1.5 }}
          className="text-primary"
        />
        <motion.path
          d="M 880 140 Q 900 180, 920 140 T 960 140"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 2 }}
          className="text-primary"
        />
        <motion.path
          d="M 980 150 Q 1020 190, 1060 150 L 1050 220"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 2.5 }}
          className="text-primary"
        />
      </svg>
    </div>
  );
}
