// components/animations/SlideIn.jsx
import { motion } from "framer-motion";

const SlideIn = ({ direction = "left", children, className = "" }) => {
  const offsetMap = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  };

  const initial = offsetMap[direction] || { x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
