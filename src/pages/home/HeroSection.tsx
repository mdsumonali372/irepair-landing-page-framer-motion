import Container from "@/components/LayOuts/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
    },
  },
};

const laptopAnimate = {
  initial: { y: 0, rotate: 30, scale: 5 },
  animate: {
    y: 20,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 items-center ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-lg max-w-[40ch] text-dark-gray my-4"
            variants={introChildren}
          >
            Welcome to
            <span className="text-primary-foreground font-semibold">
              {" "}
              iRepair
            </span>
            , your one-stop place for all kinds of{" "}
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 lg:w-full mx-auto"
          variants={laptopAnimate}
          initial="initial"
          animate="animate"
        >
          <img className="object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
