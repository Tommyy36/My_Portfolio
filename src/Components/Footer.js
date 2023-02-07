import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BtnScrollTop from "./BtnScrollTop";


const Footer = ({ setScaling }) => {
  return (
    <div className="footer" id="Footer">
      <div className="textFooter">
        <h1>Contact</h1>
        <h2>Posso programmare tutto quello che desideri</h2>
        <h3>Scrivimi dove più desideri</h3>
      </div>

      <div className="icons">
        <a href="#/">
          {" "}
          <FaFacebook
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            className="iconFacebook"
          />
        </a>
        <a href="#/">
          {" "}
          <FaWhatsapp
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            className="iconWhatsapp"
          />
        </a>

        <a href="https://www.instagram.com/russo___thomas/">
          {" "}
          <FaInstagram
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            className="iconInstagram"
          />
        </a>
        <a href="mailto: trussooo292@gmail.com">
          {" "}
          <MdEmail
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            className="iconEmail"
          />
        </a>
        <a href="#/">
          {" "}
          <FaTwitter
            onMouseEnter={() => setScaling(true)}
            onMouseLeave={() => setScaling(false)}
            className="iconTwitter"
          />
        </a>
      </div>
      <BtnScrollTop setScaling={setScaling} />
    </div>
  );
};

export default Footer;
