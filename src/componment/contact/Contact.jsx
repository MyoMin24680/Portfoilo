import React, { useState ,useRef} from "react";
import "./Contact.css";

import emailjs from '@emailjs/browser'; // Added EmailJS
import logo from "../../assets/image/logosvg.svg";
import wechat from "../../assets/image/wechat.svg";
import linkedin from "../../assets/image/linkedin.svg";
import behance from "../../assets/image/behance.svg";
import git from "../../assets/image/git.svg";
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    // REPLACE THESE THREE STRINGS WITH YOUR ACTUAL IDs FROM THE DASHBOARD
    emailjs.sendForm(
      'service_53l1jgv', 
      'template_ie2x7lh', 
      form.current,                                      
      '8v9NnlQ8Kh8MOYWHJ'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully to Myo!");
        e.target.reset(); // This clears the form after sending
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <main className="contact">
      <div className="header-line">
        <h1>contact</h1>

        <hr />
      </div>

      {/* START LOGO PART */}
      <div className="contact-body">
        <div className="logo-part">
          <img src={logo} alt="" srcset="" />
         <a 
  href="mailto:myo371240@gmail.com?subject=Project Inquiry&body=Hi Myo, I would like to talk about..." 
  className="email-link"
  target="_blank" 
  rel="noopener noreferrer"
>
            [myo371240@gmail.com]
          </a>
        </div>

        {/* END LOGO PART */}

        {/* START FORM PART */}
        <form  ref={form} onSubmit={sendEmail}>
          <div className="form-header">
            let's work together!
            <hr />
          </div>

          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
          <textarea name="message" rows={2} cols={3} id="text" placeholder=""></textarea>
          <button type="submit" className="send-btn" >
            Send
          </button>


        {/* ------- SOCILAL LINK GROUP --------- */}
          <div className="link-gp">
            <div className="tooltip">
              <img src={wechat} alt="WeChat" />
              <span className="tooltiptext">WeChat ID: jakmin_24680</span>
            </div>

            <a
              href="https://www.linkedin.com/in/myo-min-5563b0182/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin " srcset="" />
            </a>

            <a
              href="https://www.behance.net/myomin31"
              target="_blank"
              rel="noreferrer"
            >
              <img src={behance} alt="behance" srcset="" />
            </a>

            <a
              href="https://github.com/MyoMin24680"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="git" srcset="" />
            </a>
          </div>
        </form>
      </div>

      
      {/* END FORM PART */}
    </main>
  );
};

export default Contact;
