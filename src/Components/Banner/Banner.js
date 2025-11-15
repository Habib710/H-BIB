import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import './Banner.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="main-div-banner row p-3">

      {/* LEFT SIDE: IMAGE */}
      <div className="col-lg-5">
        <Zoom duration={900} triggerOnce>
          <div className="pp-img"></div>
        </Zoom>
      </div>

      {/* RIGHT SIDE: TEXT + ICONS */}
      <div className="banner-heading col-lg-6 text-white py-2">

        {/* Heading Animation */}
        <Fade direction="up" cascade damping={0.2} triggerOnce>
          <h1>Hello,</h1>
          <h1>
            I AM <span className="heading">MD HABIBULLAH</span>
          </h1>

          <h3>
            Software QA Engineer <br /> & Web Developer
          </h3>

          <p className="py-4 p-banner">
            Manual, API & Automation Testing | Skilled in Test Case Design, <br />
            Bug Reporting & Agile QA.
          </p>

          <Link to="/about">
            <button className="btn-grad">More About Me</button>
          </Link>
        </Fade>

        {/* Icons Animation */}
        <Fade direction="right" cascade damping={0.15} triggerOnce>
          <div className="pt-5 icon-css-baner">
            <a href="mailto:mdhabib71024@gmail.com" target="_blank" rel="noreferrer">
              <Icon icon="dashicons:email-alt" />
            </a>
            <a href="tel:+8801571024601">
              <Icon icon="fluent:call-32-filled" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100015363064250"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="cib:facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-habibullah710/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="entypo-social:linkedin-with-circle" />
            </a>
            <a href="https://github.com/Habib710" target="_blank" rel="noreferrer">
              <Icon icon="codicon:github-inverted" />
            </a>
            <a href="#">
              <Icon icon="bxl:instagram-alt" />
            </a>
          </div>
        </Fade>

      </div>

    </div>
  );
};

export default Banner;
