import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import Skill from '../Skill/Skill';


const Home = () => {
    return (
        <div className='main-div-home pt-lg-2'>
            <NavBar></NavBar> 
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
        </div>
    );
};

export default Home;