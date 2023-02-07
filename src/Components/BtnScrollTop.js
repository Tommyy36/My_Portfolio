import React, { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const BtnScrollTop = ({ setScaling }) => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="btn">
      {backToTop && (
        <button
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            width: "50px",
            height: "50px",
            padding: "0",
            zIndex: "8",
            borderRadius: "10px",
          }}
          onMouseEnter={() => setScaling(true)}
          onMouseLeave={() => setScaling(false)}
        >
          <BsFillArrowUpSquareFill color="black" size="5x" />
        </button>
      )}
    </div>
  );
};

export default BtnScrollTop;
