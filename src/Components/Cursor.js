import React, { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = ({scaling}) => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setsmallCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setsmallCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{ x: largeCircle.x - 28 , y: largeCircle.y - 29, transition: {type: "spring", mass: 0.2} }}
        className="large-circle"
        
      ></motion.div>
      <motion.div
        animate={{ x: smallCircle.x - 15, y: smallCircle.y - 15 }}
        className="small-circle"
        style={{scale: scaling ? 2.2 : 0.6 }}
      ></motion.div>
    </div>
  );
};

export default Cursor;
