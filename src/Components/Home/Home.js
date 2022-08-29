import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';


const Home = () => {
    return (
        <div className='main-div-home pt-lg-2'>
            <NavBar></NavBar> 
            <Banner></Banner>
        </div>
    );
};

export default Home;