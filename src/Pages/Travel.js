import React from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Travel() {
  return (
    <>
      <Navbar />
      <h1>Travel</h1>
      <div class="container body-wrapper">
        <div class="row">
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
