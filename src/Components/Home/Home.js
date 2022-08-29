import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import About from '../About/About';


const Home = () => {
    return (
        <div className='main-div-home pt-lg-2'>
            <NavBar></NavBar> 
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;