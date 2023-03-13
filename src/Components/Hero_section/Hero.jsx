import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left_h">
        <Header />
        {/* the best ad */}
        <div className="the_best_ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero_text">
          <div>
            <span className="stroke_text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* hero_buttons */}
        <div className="hero_buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right_h">
        <button className="btn">Join now</button>

        <div className="heart_rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero_image */}
        <img src={hero_image} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />

        {/* caloreies */}
        <div className="calories">
          <img src={Calories} alt=""/>
          <div>
            <sapn>Calories Burned</sapn>
            <sapn>220 Kcal</sapn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
