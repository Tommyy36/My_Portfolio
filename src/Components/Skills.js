import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const Skills = ({number, image}) => {
  return (
    <div className="skills">
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="imgSkills"
        src={image}
      />
      <div className="numberContainer">
        <div className="number">
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
