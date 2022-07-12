import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div style={{ position: "relative", height: 30, width: 120 }}>
          <Image
            src={images.logo.src}
            alt="logo"
            layout="fill"
            loading="eager"
          />
        </div>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text" id="linkedin" key="link-linkedin">
          <div style={{ opacity: 0 }} />
          <a id="resume_link" href="https://drive.google.com/file/d/1NTqUN9-IOdiNzIzUZdldFimjr1nX4CwD/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="app__flex p-text" id="linkedin" key="link-linkedin">
                <a id="resume_link_menu" href="https://drive.google.com/file/d/1NTqUN9-IOdiNzIzUZdldFimjr1nX4CwD/view?usp=sharing" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
