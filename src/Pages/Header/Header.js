import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'
import classes from '../Background/Background.module.css'
import { GrSwift, GrFirefox } from "react-icons/gr";
import { useContext } from 'react';
import Authprovider, { Authcontext } from '../Authprovider/Authprovider';

const Header = () => {

    const { user } = useContext(Authcontext);
    return (
        <div className={classes.background}>
            <div className='header-container'>

                <div className='website-name'>
                    <h1><GrFirefox></GrFirefox> Tech-<span>Ademy</span></h1>
                    <p>Learn From The Best</p>
                </div>
                <div className='headerlinks'>
                    <Link to='/home'>Home</Link>
                    <Link to='courses'>Courses</Link>
                    <Link to='faq'>FAQ</Link>
                    <Link to='blogs'>Blog</Link>
                    <Link to='login'>Login</Link>
                    <Link to='register'>Register</Link>
                    <Link to=''>{user?.name}</Link>
                </div>
            </div>


        </div>
    );
};

export default Header;