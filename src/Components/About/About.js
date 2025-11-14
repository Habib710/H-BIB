import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import './About.css';
import { Icon } from '@iconify/react'



const About = () => {
    return (
        <div className='container py-5 '>
           
            <h1 className='text-center py-5 text-white'>ABOUT ME</h1>

            <div className='row text-white py-4'>
            <Fade right big cascade>
                <p className='col-lg-8  p-banner'>I'm an entry-level Software QA Engineer with hands-on experience in manual testing, API testing, and basic automation using Selenium. I understand SDLC, STLC, Agile workflow, and specialize in test case design, defect reporting, and regression testing. I enjoy breaking systems, finding inconsistencies, and ensuring product quality with structured testing techniques.</p>

                <p className='col-lg-4 my-tag'>Testing leads to failure. And failure leads to understanding</p>
                </Fade>
            </div>
            <div className='row py-4'>

                <div className='col-lg-6'>
                    <h2 className='heading'>PERSONAL INFO <hr/> </h2>
                    <div className='row  p-banner li-css'>
                        <div className='col-lg-6'>
                            <p>Frist Name : Mohammad</p>
                            <p>Age : 25 Years</p>
                            <p>Blood Group : AB+</p>
                            <p>Univarsity : Green University of Bangladesh</p>
                            
                            
                        </div>
                        <div  className='col-lg-6'>
                            <p>
                             Last Name : Habibullah</p>
                            <p>Nationality : Bangladeshi</p>
                            <p>Address : Dhaka</p>
                            <p>
                            Education : BSc in CSE </p>
                           
                        </div>
                    </div>
                   <a href="https://drive.google.com/file/d/1YqQ_WcfWUP6SGyiLHC8bGvvyg7UuRvle/view?usp=sharing" target='blank'> <button className='btn-grad my-3'>DOWNLOAD CV <Icon className='fs-4' icon="charm:download" /></button></a>
                  
                </div>
                <Zoom left cascade>
                <div className='col-lg-6 box-div py-4'> 
               
                <div class="div-parsonal ">
                    <h1 > 0-1  </h1>
                    <p> YEARS OF EXPERIENCE </p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 30 +  </h1>
                    <p> WEB PROJECTS</p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 10 +  </h1>
                    <p> TESTING PROJECTS </p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 5+  </h1>
                    <p> AUTOMATION</p>
                    </div>
                    

                </div>
                </Zoom>
                


            </div>
            
        </div>
    );
};

export default About;