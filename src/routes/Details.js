import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Details</h1>
        <div className="page-content-container">
          <p className="page-subtitle">The wedding of</p>
          <p className="page-subtitle bold">Chloe Earnshaw & Ethan Linton</p>
          <p className="page-text bold">Date</p>
          <p className="page-text">Saturday 25 July 2026</p>
          <p className="page-text bold">Location</p>
          <p className="page-text">
            Ocean, Queens Drive, Exmouth, Devon EX8 2AY
          </p>
          <p className="page-text link">
            <a href="https://www.oceanweddings.co.uk/" target="_blank">
              www.oceanweddings.co.uk
            </a>
          </p>
          <p className="page-text link">
            <Link to="/location">Directions</Link>
          </p>
          <p className="page-text bold">Ceremony</p>
          <p className="page-text">14.00</p>
          <p className="page-text bold">Evening event</p>
          <p className="page-text">19:00</p>
          <p className="page-text bold">Carriages</p>
          <p className="page-text">23:30</p>
          <p className="page-text bold">Dress Code</p>
          <p className="page-text">Smart Casual</p>
          <p className="page-text bold">Accommodation</p>
          <p className="page-text link-space">
            <Link to="/accommodation">Here are a few local places to stay</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
