import useScrollGrow from "@/hooks/useScrollGrow";
import { motion } from "framer-motion";

const ChipReplacement = () => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-500 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
    ></motion.div>
  );
};

export default ChipReplacement;
