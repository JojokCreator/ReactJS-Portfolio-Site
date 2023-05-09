import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/JojokCreator" aria-label="github link">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.facebook.com/public/Joe-Klakus"
        aria-label="facebook link"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/joe-klakus-40bb9820b/"
        aria-label="Linkedln link"
      >
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
