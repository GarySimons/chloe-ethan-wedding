import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import waxSeal from "../assets/wax-seal.png";
import scallopShell from "../assets/scallop.png";
import "./HomeStyles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <div className="ranged-left-container">
          <p className="wedding">THE WEDDING OF</p>
        </div>
        <div className="name-container">
          <h1 className="name ellia">Chloe</h1>
          <h1 className="name and">&</h1>
          <h1 className="name dylan">Ethan</h1>
        </div>
        <div className="home-date-container">
          <p className="home-date">27.09.26</p>
          <hr className="home-line" />
          <p className="home-address">EXMOUTH, DEVON</p>
        </div>
        <img src={scallopShell} alt="Scallop Shell" className="wax-image" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
