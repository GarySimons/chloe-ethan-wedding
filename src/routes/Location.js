import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Map from "../components/Map";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1 className="page-heading">Location</h1>
        <p className="page-text margin-bottom">
          Ocean, Queens Drive, Exmouth, Devon EX8 2AY
        </p>
        <p className="page-text bold-link">
          <a href="https://www.oceanweddings.co.uk/">www.oceanweddings.co.uk</a>
        </p>
        <Map />
        <p className="page-text bold">Public Transport</p>
        <p className="page-text">
          Catch the train to Exmouth train station, where Ocean is just a 15
          minute walk away. Take the 57 bus, and stop at Fairfield Road where
          Ocean is a two minute walk toward the seafront.
        </p>
        <p className="page-text bold">Road Directions</p>
        <p className="page-text">
          From M5 take the exit for A376 Exmouth. Continue until you reach
          Exmouth Town Centre. At the roundabout take the second exit onto
          Imperial Road. At the roundabout take the first exit to continue onto
          Imperial Road. At the end of the road turn right onto Alexandra
          Terrace. At the end of the road turn left onto Esplanade. At the mini
          roundabout take the second exit and Ocean will be found on the left.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
