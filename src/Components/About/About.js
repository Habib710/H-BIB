import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className='container py-5 '>
            <h1 className='text-center py-5 text-white'>ABOUT ME</h1>

            <div className='row text-white py-4'>
                <p className='col-lg-8  p-banner'>Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.</p>
                <p className='col-lg-4 my-tag'>I am a Web developer who cares about the code and the people.</p>
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
                            <p>Github : </p>
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
                    <button className='btn-grad my-3'>DOWNLOAD CV</button>

                </div>

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
                


            </div>
            
        </div>
    );
};

export default About;