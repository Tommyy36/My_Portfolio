import React from "react";
import "./Header.css";
import Arrow from "./Arrow";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import "../Responsive.css";

// import { Link } from "react-router-dom";

const Header = ({ setScaling }) => {
  return (
    <div className="containerHead">
      <div className="write">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: [2, 1],
            rotate: [90, 0],
          }}
          transition={{
            duration: 2,
          }}
        >
          <h1 className="h1Header">Thomas Russo</h1>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: [2, 1],
            rotate: [90, 0],
          }}
          transition={{
            duration: 2,
          }}
        >
          <p className="pHeader">Frontend Developer</p>
        </motion.div>
      </div>

      <Link to="#Expertise">
        <Arrow setScaling={setScaling} />
      </Link>
    </div>
  );
};

export default Header;
