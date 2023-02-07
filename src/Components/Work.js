import React from "react";
// import { Link } from "react-router-dom";
import "./Work.css";
import { motion } from "framer-motion";

const Work = ({ setScaling }) => {
  return (
    <div className="work" id="Work">
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
        <div className="leftWork">
          <h1>My Work</h1>
          <p>
            Ho fatto vari progetti tra i quali il clone di Netflix e di
            Deliveroo, <br /> con principalmente i linguaggi React e React
            Native.
          </p>
        </div>
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
      >
        <div className="rightWork">
          <img
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            src="https://media.gettyimages.com/id/1390582560/photo/computer-mobile-phone-and-digital-tablet-pc-with-clipping-path.jpg?s=612x612&w=gi&k=20&c=iYrn3rtXLkz6hFTcEHR8cNiGdhAc6i-u3ZeVbNekVXo="
            alt=""
            className="imgWork"
          />
          <a href="https://github.com/Tommyy36?tab=repositories">
            <button className="btnWork">Guarda tutti i miei progetti</button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
