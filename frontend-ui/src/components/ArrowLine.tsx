import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ArrowLine({ x1, x2, delay }: { x1: string; x2: string; delay: number }) {
  const ref = useRef<SVGLineElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (isInView) {
      setPathLength(1);
    } else {
      setPathLength(0);
    }
  }, [isInView]);

  return (
    <motion.line
      ref={ref}
      x1={x1}
      y1="2"
      x2={x2}
      y2="2"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      style={{
        filter: "drop-shadow(0 0 4px rgba(255,255,255,0.7))",
      }}
      animate={{ pathLength }}
      initial={{ pathLength: 0 }}
      viewport={{once:true}}
      transition={{
        delay,
        duration: 0.5,
      }}
    />
  );
}
