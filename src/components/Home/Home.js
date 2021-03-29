import React from 'react';
import Header from '../Header/Header';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css'

const Home = () => {
    return (
        <div className="home-background">
            <Header></Header>
            <HomeDetails></HomeDetails>
            
        </div>
    );
};

export default Home;