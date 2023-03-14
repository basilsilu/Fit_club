import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whitetick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans_container">
      <div className="programs_header" style={{ gap: "2rem" }}>
        <span className="stroke_text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke_text">NOW WITHUS</span>
      </div>
      {/*plans card*/}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whitetick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div><span>See more benefits -></span></div>
            <button className="btn">Join now</button>
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default Plans;