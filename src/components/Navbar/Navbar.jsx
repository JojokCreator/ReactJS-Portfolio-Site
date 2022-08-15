import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = e => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>{'</> Joe Klakus'}</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
      <HiMenuAlt4 onClick={handleOnClick} />

        {toggle && (
          <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
            </motion.span>
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;