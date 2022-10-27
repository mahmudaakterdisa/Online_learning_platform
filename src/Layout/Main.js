import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className='footerdiv'>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Main;