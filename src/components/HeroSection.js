import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/got.mp4" autoPlay loop muted />
      <h1>GOT SECURITY?</h1>
      <p>Contact us now!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
