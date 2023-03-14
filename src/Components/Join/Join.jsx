import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser'
const Join = () => {
  const Form=useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_avuorbh', 'template_90rtqos', Form.current, 'ejHz28oK7WZ8jv2R7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="join" id="joinus">
      <div className="left_join">
        <hr />
        <div>
          <span className="stroke_text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span  className="stroke_text">WITH US?</span>
        </div>
      </div>
      <div className="right_join">
        <form ref={Form} className="email_container"onSubmit={sendEmail} >
          <input  type="email" name="user_email" placeholder="Enter Your  Email Address" />
          <button className="btn btn_join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
