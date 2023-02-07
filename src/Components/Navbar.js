import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import logoThomas from "../Images/logoThomas.png";

const Navbar = ({ setScaling }) => {
  const [show, handleShow] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className="containerNav">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <img src={logoThomas} alt="logoThomas" className="nameLogo" />
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
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className={`all-section ${show && "all-section2"}`}
      >
        <Link style={{ textDecoration: "none" }} to="#Home">
          <h2
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            id="allName"
            onClick={() => setActive("#Home")}
            className={active === "#Home" ? "active" : ""}
          >
            Home
          </h2>
        </Link>

        <Link style={{ textDecoration: "none" }} to="#Expertise">
          <h2
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            id="allName"
            onClick={() => setActive("#Expertise")}
            className={active === "#Expertise" ? "active" : ""}
          >
            Expertise
          </h2>
        </Link>

        <Link style={{ textDecoration: "none" }} to="#Work">
          <h2
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            id="allName"
            onClick={() => setActive("#Work")}
            className={active === "#Work" ? "active" : ""}
          >
            Work
          </h2>
        </Link>

        <Link style={{ textDecoration: "none" }} to="#Footer">
          <h2
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            id="allName"
            onClick={() => setActive("#Footer")}
            className={active === "#Footer" ? "active" : ""}
          >
            Contact
          </h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
