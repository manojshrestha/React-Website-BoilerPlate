import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
// import AboutMe from "../Components/AboutMe";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// import Header from "../Components/Header";

function Home() {
  return (
    <>
      <Navbar />
      {/* <AboutMe /> */}
      <Header />
      <Footer />
    </>
  );
}

export default Home;
