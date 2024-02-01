import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollGrow = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "0.5 1"],
  });

  //   const scaleValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const style = { scale: scrollYProgress, opacity: opacityValue };

  return { componentRef, style };
};

export default useScrollGrow;
