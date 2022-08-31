import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Project from '../Projects/Project';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Contract from '../Contract/Contract';


const Home = () => {
    return (
        <div className='main-div-home pt-lg-2'>
           
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Contract></Contract>
        </div>
    );
};

export default Home;