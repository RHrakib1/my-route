import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is my home page</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;