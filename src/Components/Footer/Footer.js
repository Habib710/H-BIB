import { Icon } from '@iconify/react';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='main-div-footer text-white  d-lg-flex p-5 mt-5 '>
         <div>
            <h4>Md Habibullah</h4>
            <p>Personal Website as a protfolio</p>
            <p>Detail-oriented and passionate Software Quality Assurance(SQA)<br /> enthusiast with strong knowl 
edge of SDLC, STLC, and Agile methodology.</p>
         </div>
         <div className='icon-css-baner'>
            <h4>Socail Link</h4>
            <p>mdhabib71024@gmail</p>
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
              </a> <br />
              <a href="https://github.com/Habib710" target='blank'>
                <Icon icon="codicon:github-inverted" />
              </a>
              <a href="#i">
                <Icon icon="bxl:instagram-alt" />
              </a>
              <br />
            
            
         </div>
         <div>
            <h5>Developed By <br /> Md Habibullah</h5>
            <br />
            <h6>All Right Reserved</h6>
            <h6>Copyright 2025</h6>
         </div>
            
        </div>
    );
};

export default Footer;