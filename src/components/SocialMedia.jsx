import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/JojokCreator">
      <BsGithub />
      </a>
    </div>
    <div>
    <a href="https://www.facebook.com/public/Joe-Klakus">
      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href="https://www.linkedin.com/joe-klakus-40bb9820b%2F">
      <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;