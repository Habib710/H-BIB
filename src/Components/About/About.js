import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";
import './About.css'; 
import { Icon } from '@iconify/react'

const About = () => {
    return (
        <div className='container py-5 '>
            
            <h1 className='text-center py-5 text-white'>ABOUT ME</h1>

            {/* --- About Me Description Section --- */}
            <div className='row text-white py-4'>
                <Fade direction="right" cascade damping={0.2} triggerOnce>
                    <div className="col-12 d-flex flex-column flex-lg-row align-items-lg-start">
                        {/* Note: The 'my-tag' style is now controlled by your CSS */}
                        <p className='p-banner col-lg-8 p-3'>
                            I'm an entry-level Software QA Engineer with hands-on experience in manual testing, 
                API testing, and basic automation using Selenium. I understand SDLC, STLC, Agile workflow, 
                and specialize in test case design, defect reporting, and regression testing. 
                I enjoy breaking systems, finding inconsistencies, and ensuring product quality 
                with structured testing techniques.
                        </p>
                        
                        <p className='my-tag col-lg-4 mt-4 ' style={{ paddingLeft: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Testing leads to failure. And failure leads to understanding
                        </p>
                    </div>
                </Fade> 
            </div>
            {/* ------------------------------------ */}


            {/* --- Main Section Row: PERSONAL INFO (Left: col-lg-6) and STATS BOXES (Right: col-lg-6) --- */}
            <div className='row py-4 col-lg-12'>

                {/* Left Side: Personal Info (col-lg-6) */}
                <div className='col-lg-12 center'>
                    <h2 className='heading'>PERSONAL INFO</h2> 
                    <div className='row p-banner li-css'>
                        <div className='col-lg-6 p-4 center'>
                            <p>First Name : Mohammad</p>
                            <p>Age : 22 Years</p>
                            <p>Freelance : </p>
                            <p>Phone : +8801571024601</p>
                            <p>Github : <a href="your_github_link" target='_blank' rel="noopener noreferrer">Link</a></p>
                        </div>
                        <div className='col-lg-6'>
                            <p>Last Name : Habibullah</p>
                            <p>Nationality : Bangladeshi</p>
                            <p>Address : Dhaka</p>
                            <p>Email : mdhabib71024@gmail.com</p>
                            <p>Language : English, Bangla</p>
                        </div>
                    </div>
                    {/* The Download CV Button */}
                    <a href="https://drive.google.com/file/d/1YqQ_WcfWUP6SGyiLHC8bGvvyg7UuRvle/view?usp=sharing" target='_blank' rel="noopener noreferrer"> 
                        <button className='btn-grad my-3'>
                            DOWNLOAD CV <Icon className='fs-4' icon="charm:download" />
                        </button>
                    </a>
                </div>
                
                {/* Right Side: Statistics Boxes (col-lg-6) */}
                <Zoom right cascade> 
                    {/* The 'box-div' now manages the 2x2 grid using the CSS Grid styles you provided. */}
                    <div className='col-lg-12 py-2 c'> 
                        
                        <div className="box-div"> {/* CSS Grid is applied here */}
                            
                            {/* Box 1: YEARS OF EXPERIENCE */}
                            <div className="div-parsonal text-center"> 
                                <h1> 1+ </h1>
                                <p> YEARS OF EXPERIENCE </p>
                            </div>
                            
                            {/* Box 2: COMPLETED PROJECTS */}
                            <div className="div-parsonal text-center"> 
                                <h1> 40 + </h1>
                                <p> COMPLETED PROJECTS</p>
                            </div>
                            
                            {/* Box 3: HAPPY CUSTOMERS */}
                            <div className="div-parsonal text-center"> 
                                <h1> 5 + </h1>
                                <p> HAPPY CUSTOMERS </p>
                            </div>
                            
                            {/* Box 4: AWARDS WON */}
                            <div className="div-parsonal text-center">
                                <h1> 1.9 + </h1>
                                <p> AWARDS WON</p>
                            </div>

                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default About;