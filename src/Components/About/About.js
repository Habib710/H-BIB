import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import './About.css';
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className=' p-5 '>
           
            <h1 className='text-center py-5 text-white'>ABOUT ME</h1>

            <div className='row text-white py-4'>
            <Fade right big cascade>
                <p className='col-lg-8  p-banner'>Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.</p>
                <p className='col-lg-4 my-tag'>I am a Web developer who cares about the code and the people.</p>
                </Fade>
            </div>
            <div className='row py-4'>

                <div className='col-lg-6'>
                    <h2 className='heading'>PERSONAL INFO <hr/> </h2>
                    <div className='row  p-banner li-css'>
                        <div className='col-lg-6'>
                            <p>Frist Name : Mohammad</p>
                            <p>Age : 22 Years</p>
                            <p>Freelance :</p>
                            <p>Phone : +8801571024601</p>
                            <p>Github : <a href="https://github.com/Habib710">Link</a>  </p>
                        </div>
                        <div  className='col-lg-6'>
                            <p>
                             Last Name : Habibullah</p>
                            <p>Nationality : Bangladeshi</p>
                            <p>Address : Dhaka</p>
                            <p>
                                Email : mdhabib71024@gmail.com </p>
                            <p>
                           Language :English, Bangla</p>
                        </div>
                    </div>
                   <a href="https://drive.google.com/file/d/1YqQ_WcfWUP6SGyiLHC8bGvvyg7UuRvle/view?usp=sharing" target='blank'> <button className='btn-grad my-3'>DOWNLOAD CV <Icon className='fs-4' icon="charm:download" /></button></a>
                  
                </div>
                <Zoom left cascade>
                <div className='col-lg-6 box-div py-4'> 
               
                <div class="div-parsonal ">
                    <h1 > 1+  </h1>
                    <p> YEARS OF EXPERIENCE </p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 40 +  </h1>
                    <p> COMPLETED PROJECTS</p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 5 +  </h1>
                    <p> HAPPY CUSTOMERS </p>
                    </div>
                <div class="div-parsonal ">
                    <h1> 1.9 +  </h1>
                    <p> AWARDS WON </p>
                    </div>
                    

                </div>
                </Zoom>
                


            </div>
            
        </div>
    );
};

export default About;