import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import './Banner.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Banner = () => {
  return (
    <div className="main-div-banner row p-3 position-relative overflow-hidden">

      {/* BACKGROUND FLOATING SYMBOLS */}
      <motion.div
        className="floating-icon"
        variants={floatingVariants}
        animate="animate"
        style={{ top: "10%", left: "5%" }}
      >
        <Icon icon="mdi:shield-lock" width="45" />
      </motion.div>

      <motion.div
        className="floating-icon"
        variants={floatingVariants}
        animate="animate"
        style={{ top: "70%", left: "80%" }}
      >
        <Icon icon="mdi:code-braces" width="45" />
      </motion.div>

      <motion.div
        className="floating-icon"
        variants={floatingVariants}
        animate="animate"
        style={{ top: "40%", left: "40%" }}
      >
        <Icon icon="mdi:bug" width="45" />
      </motion.div>

      {/* LEFT SIDE: IMAGE */}
      <div className="col-lg-5">
        <Zoom duration={900} triggerOnce>
          <motion.div
            className="pp-img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </Zoom>
      </div>

      {/* RIGHT SIDE */}
      <div className="banner-heading col-lg-6 text-white py-2">

        {/* HEADING TEXT WITH SLIGHT FLOAT */}
        <Fade direction="up" cascade damping={0.2} triggerOnce>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello,
          </motion.h1>

          <h1>
            I AM{" "}
            <motion.span
              className="heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              MD HABIBULLAH
            </motion.span>
          </h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Software QA Engineer <br /> & Web Developer
          </motion.h3>

          <p className="py-4 p-banner">
            Manual, API & Automation Testing | Skilled in Test Case Design, <br />
            Bug Reporting & Agile QA.....................
          </p>

          <Link to="/about">
            <motion.button
              className="btn-grad"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
            >
              More About Me
            </motion.button>
          </Link>
        </Fade>

        {/* ICONS */}
        <Fade direction="right" cascade damping={0.15} triggerOnce>
          <div className="pt-5 icon-css-baner">
            <motion.a whileHover={{ scale: 1.3 }} href="mailto:mdhabib71024@gmail.com" target="_blank" rel="noreferrer">
              <Icon icon="dashicons:email-alt" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="tel:+8801571024601">
              <Icon icon="fluent:call-32-filled" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="https://www.facebook.com/profile.php?id=100015363064250" target="_blank" rel="noreferrer">
              <Icon icon="cib:facebook" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/md-habibullah710/" target="_blank" rel="noreferrer">
              <Icon icon="entypo-social:linkedin-with-circle" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/Habib710" target="_blank" rel="noreferrer">
              <Icon icon="codicon:github-inverted" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.3 }} href="#">
              <Icon icon="bxl:instagram-alt" />
            </motion.a>
          </div>
        </Fade>

      </div>
    </div>
  );
};

export default Banner;
