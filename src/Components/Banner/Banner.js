import React from 'react';
import { Fade, Slide } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import './Banner.css';
import { Icon } from '@iconify/react';


const Banner = () => {
    return (
        <div className='main-div-banner row p-3'>
             <Zoom>

            <div className='pp-img col-lg-6'>
               
            </div>
          
            <div className='banner-heading col-lg-6 text-white py-4 '>
            <Fade bottom big cascade>
                <h1>HI,</h1>
                <h1>I AM <span className='heading'> MD HABIBULLAH</span> </h1>
                <h1>WEB-DEVELOPER</h1>
                
                <p className='py-2 p-banner'>I am a full-stack web developer with 1+ years of experience with modern technologies like React js , HTML,Bootstarp ,CSS, Tailwind CSS, Node js, Mongo DB, Express JS etc.....</p>
                
                <button className='btn-grad'>More About Me</button>

                </Fade>
                <Fade right big cascade>
                <div className='pt-5 icon-css-baner'>
                
                <a href="#fg"><Icon icon="dashicons:email-alt" /></a>
                <a href="#fg"><Icon icon="fluent:call-32-filled" /></a>
                <a href="#fg"><Icon icon="cib:facebook" /></a>
                <a href="#fg"><Icon icon="entypo-social:linkedin-with-circle" /></a>
                <a href="#fg"><Icon icon="codicon:github-inverted" /></a>
                <a href="#fg"><Icon icon="bxl:instagram-alt" /></a>
               
                </div>
                </Fade>
                
            </div>
            
            </Zoom>
           
            
        </div>
    );
};

export default Banner;