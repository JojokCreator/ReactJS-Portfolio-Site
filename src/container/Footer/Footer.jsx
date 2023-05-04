import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [state, handleSubmit] = useForm("xnqrzjgy");

  return (
    <>
      <h2 className="head-text">Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:joeyk2k@hotmail.com" className="p-text">
            joeyk2k@hotmail.com
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+44 (023) 456-7890</a>
        </div> */}
      </div>
      {state.succeeded ? (
        <div className="w-screen flex justify-center">
          <h2 className="text-xl p-6">
            Thanks for your Message! I will get back to you soon
          </h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="p-text">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
