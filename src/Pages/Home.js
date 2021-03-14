import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";

// import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container body-wrapper">
        {/* <AboutMe /> */}
        <h2>Home</h2>
      </div>
      <Footer />

      {/* <Header /> */}
    </>
  );
}

export default Home;
