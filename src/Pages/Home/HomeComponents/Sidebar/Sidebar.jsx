import React from "react";
import s from "./Sidebar.module.scss";
import cl from "classnames";
import { motion } from "framer-motion";

const Sidebar = ({ show, setShowNav }) => {
  return (
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className={show ? cl(s.sidenav, s.active) : s.sidenav}
    >
      <motion.div
        className={s.closeBurger}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 3 }}
      >
        {/* <motion.label htmlFor="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </motion.label> */}
        <div className={s.cross} onClick={() => setShowNav(false)}>
          <div className={s.line}></div>
          <div className={s.line}></div>
        </div>
      </motion.div>
      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#" onClick={() => setShowNav(false)}>
            Home
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#about" onClick={() => setShowNav(false)}>
            About
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#features" onClick={() => setShowNav(false)}>
            Features
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <a href="#how" onClick={() => setShowNav(false)}>
            How it works
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
