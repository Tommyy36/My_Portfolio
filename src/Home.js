import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Cursor from "./Components/Cursor";
import Expertise from "./Components/Expertise";
import Work from "./Components/Work";
import Footer from "./Components/Footer";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  const [scaling, setScaling] = useState(false);
  return (
    <BrowserRouter>
      <div className="all-container" id="Home">
        <Cursor scaling={scaling} />

        <Navbar setScaling={setScaling} />

        <Header setScaling={setScaling} />

        <Expertise setScaling={setScaling} />

        <Work setScaling={setScaling} />

        <Footer setScaling={setScaling} />
      </div>
    </BrowserRouter>
  );
};

export default Home;
