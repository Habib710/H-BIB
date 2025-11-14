import React from 'react'
import { Fade, Slide } from 'react-reveal'
import Zoom from 'react-reveal/Zoom'
import './Banner.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-div-banner row p-3">
      <Zoom>
        <div className="pp-img col-lg-6"></div>

        <div className="banner-heading col-lg-6 text-white py-4 ">
          <Fade bottom big cascade>
            <h1>Hello,</h1>
            <h1>I AM <span className="heading"> MD HABIBULLAH</span>{' '}</h1>
            <h3>Software QA Engineer <br /> & Web Devoloper </h3>

            <p className="py-4 p-banner">
              Manual, API & Automation Testing | Skilled in Test Case Design, <br />Bug Reporting & Agile QA.
            </p>

           <Link to="/about"> <button className="btn-grad">More About Me</button></Link>
          </Fade>
          <Fade right big cascade>
            <div className="pt-5 icon-css-baner">
              <a href="mdhabib71024@gmail.com" target='blank'>
                <Icon icon="dashicons:email-alt" />
              </a>
              <a href="+8801571024601">
                <Icon icon="fluent:call-32-filled" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100015363064250" target='blank'>
                <Icon icon="cib:facebook" />
              </a>
              <a href="https://www.linkedin.com/in/md-habibullah710/" target='blank'>
                <Icon icon="entypo-social:linkedin-with-circle" />
              </a>
              <a href="https://github.com/Habib710" target='blank'>
                <Icon icon="codicon:github-inverted" />
              </a>
              <a href="#i">
                <Icon icon="bxl:instagram-alt" />
              </a>
            </div>
          </Fade>
        </div>
      </Zoom>
    </div>
  )
}

export default Banner
