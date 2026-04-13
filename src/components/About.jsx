import React from "react";
import "./About.css";

const About = () => {
    return(
        <div className="about-page">
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                We are a trusted financial platform dedicated to making loans access simple, fast and transparent.
            Our mission is to empower individuals and small businesses with financial options without the hassle of traditional banking bureaucracy.
            </p>
            </div>     
            
            <div className="features-container">

            <div className="features">
                <h3>Fast Approval Process</h3>
                <p>Get decisions in minutes, not weeks.</p>
            </div>
             
              <div className="features">
                <h3>No Hidden Fees</h3>
                <p>100% free to apply- no hidden charges</p>
            </div>

             <div className="features">
                <h3>Secure & Private</h3>
                <p>Your data is encrypted and never shared</p>
            </div>

            </div>
            </div>
    )
}

export default About;