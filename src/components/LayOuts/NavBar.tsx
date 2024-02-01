import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.header
      className="h-16 fixed bg-white w-full z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <nav className="w-full max-w-[1220px] mx-auto h-full flex justify-between items-center px-[20px] ">
        <span>iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
