import React from "react";
import "./home.scss";

import Navbar from "../navbar/navbar";

interface Props {}
const Home = (props: Props) => {
  return (
    <div>
      {/* <nav className="navbar">
        <Navbar />
      </nav> */}
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="home" id="home">
          <h1>home</h1>
        </div>
        <div className="about" id="about">
          <h1>about</h1>
        </div>
        <div className="portfolio" id="portfolio">
          <h1>portfolio</h1>
        </div>
        <div className="contact" id="contact">
          <h1>contact</h1>
        </div>
        <div className="footer">
          <h3>footer</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
