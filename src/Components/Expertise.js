import React from "react";
import "./Expertise.css";
import Skills from "./Skills";
import { motion } from "framer-motion";
import BtnScrollTop from "./BtnScrollTop";

const Expertise = ({ setScaling }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="expertise"
      id="Expertise"
    >
      <h1>My Expertise</h1>
      <div
        className="skillsContainer"
        onMouseEnter={() => setScaling(true)}
        onMouseLeave={() => setScaling(false)}
      >
        <Skills
          number={"90%"}
          image={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
        />
        <Skills
          number={"90%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
          }
        />
        <Skills
          number={"70%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          }
        />
        <Skills
          number={"90%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
          }
        />
        <Skills
          number={"50%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
          }
        />
        <Skills
          number={"80%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          }
        />
        <Skills
          number={"70%"}
          image={
            "https://as1.ftcdn.net/v2/jpg/02/39/03/26/1000_F_239032634_UCPzWyu4XJTDq6q2PC4bRGDXPhESFbTZ.jpg"
          }
        />

        <Skills
          number={"90%"}
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
          }
        />
      </div>
      <BtnScrollTop />
    </motion.div>
  );
};

export default Expertise;
