import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition ={type:'spring',duration :3.5}
  const mobile =window.innerWidth<=768 ? true:false;
  return (
    <div className="hero" id="Home">
      <div className="blur blur_h"></div>
      <div className="left_h">
        <Header />
        {/* the best ad */}
        <div className="the_best_ad">
          <motion.div
            initial={{left: mobile?'178px':'238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition,type:'tween'}}
          > </motion.div>
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
            <span><NumberCounter end={140} start={100} delay='4' preFix="+"/></span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix="+"/></span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix="+"/></span>
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

        <motion.div
          transition={transition}
          whileInView={{ right:"4rem" }}
          initial={{right:"-1rem"}}
         className="heart_rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero_image */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
         src={hero_image_back} alt="" className="hero_image_back" />

        {/* caloreies */}
        <motion.div
          initial={{right:"37rem"}}
          whileInView={{right:"28rem"}}
          transition={transition}
         className="calories">
          <img src={Calories} alt=""/>
          <div>
            <sapn>Calories Burned</sapn>
            <sapn>220 Kcal</sapn>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
