import React from 'react';
import Bookdetail from '../Bookdetail/Bookdetail';
import Header from '../Header/Header';
import './Startbook.css'

const Startbook = () => {
    return (
        <div className ="start-book">
            <Header></Header>
            <Bookdetail></Bookdetail>
        </div>
    );
};

export default Startbook;