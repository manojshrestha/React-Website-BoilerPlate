import React from "react";
import "./AboutMe.css";
import profilePic from "../Images/Manoj.jpeg";
import skillPic from "../Images/Skills.png";

const AboutMe = () => {
  return (
    <div className="container">
      <div className="aboutme-wrapper">
        <div class="row">
          <div class="col-lg-3">
            {/* Profile Picture */}
            <img src={profilePic} alt="Profile pic" className="profilepic" />
            <div className="profileDetail">
              <p>
                <strong>Age:</strong> 32
              </p>
              <p>
                <strong>Occupation:</strong> Software Engineer
              </p>
              <p>
                <strong>Status: </strong>Single
              </p>
              <p>
                <strong>Gender:</strong> Male
              </p>
            </div>
          </div>
          <div class="col-lg-9">
            <h2>About me</h2>
            <p>
              Use the very first line of your “About Me” page’s portfolio
              introduction to simply tell visitors who you are. Think about how
              you would introduce yourself to someone who’s asked what you do,
              and just go from there. Make sure you mention the city you’re
              based in. <br />
              Use the very first line of your “About Me” page’s portfolio
              introduction to simply tell visitors who you are. Think about how
              you would introduce yourself to someone who’s asked what you do,
              and just go from there. Make sure you mention the city you’re
              based in.
            </p>
            <img src={skillPic} alt="Profile pic" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
