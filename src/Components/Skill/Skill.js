import React from 'react';
import './Skill.css';
import html from '../images/html.webp'
import js from '../images/js.webp'
import css from '../images/css.webp'
import react from '../images/reactjs.webp'
import node from '../images/nodejs.webp'
import expre from '../images/express.webp'
import boot from '../images/bootstrap.webp'
import tail from '../images/tailwind.webp'
import cp from '../images/C.png'
import fire from '../images/firebase.webp'
import git from '../images/git.webp'
import mongo from '../images/mongodb.webp'
import ts from '../images/ts.webp'
import sss from '../images/scss.webp'
import next from '../images/nextjs.webp'
import fig from '../images/figma.png'
import py from '../images/python.webp'

import redux from '../images/2020-05-04-ionic-react-and-redux-74ed1080.png'
import { Fade } from 'react-reveal';

const Skill = () => {
    return (
        <div className=' py-5'>
            <h1 className='text-center text-white py-5'>MY SKILLS</h1>
            <div className='skill-main my-5'>
                <h4>Language, Framework & other</h4>
                <div className='all-skill-div'>
                <Fade bottom big cascade>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={html} alt="img" />
                        <p>HTML</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={css} alt="img" />
                        <p>CSS</p>
                    </div>
                    <div className='skill-css  my-4'>
                        <img width="100%" src={boot} alt="img" />
                        <p className='text-center '>BOOTSTARP</p>
                    </div>
                    <div className='skill-css text-center  my-4'>
                        <img width="100%" src={tail} alt="img" />
                        <p>TAILWIND</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={js} alt="img" />
                        <p>JS</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={react} alt="img" />
                        <p>REACT</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={node} alt="img" />
                        <p>NODE</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={expre} alt="img" />
                        <p>EXPRESS </p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="50%" src={mongo} alt="img" />
                        <p>MONGODB</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="70%" src={fire} alt="img" />
                        <p>FIREBASE</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={git} alt="img" />
                        <p>GIT</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={redux} alt="img" />
                        <p>REDUX</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={cp} alt="img" />
                        <p>C</p>
                    </div>
                    <div className='skill-css text-center my-4'>
                        <img width="100%" src={fig} alt="img" />
                        <p>FIGMA</p>
                    </div>
                    </Fade>
                </div>
               

            </div>
            <div className='skill-main my-5'>
                <h4>Cooming Soon</h4>
                <div className='all-skill-div'>
                <Fade bottom big cascade>
               
                <div className='skill-css text-center my-4'>
                        <img width="100%" src={ts} alt="img" />
                        <p>Typescript</p>
                    </div>
                <div className='skill-css text-center my-4'>
                        <img width="100%" src={sss} alt="img" />
                        <p>SCSS</p>
                    </div>
                <div className='skill-css text-center my-4'>
                        <img width="100%" src={next} alt="img" />
                        <p>Next js</p>
                    </div>
                <div className='skill-css text-center my-4'>
                        <img width="100%" src={py} alt="img" />
                        <p>PYTHON</p>
                    </div>
                    </Fade>

                </div>

           </div>
            
        </div>
    );
};

export default Skill;