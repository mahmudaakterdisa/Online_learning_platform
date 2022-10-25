import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'
import classes from '../Background/Background.module.css'

const Header = () => {
    return (
        <div className={classes.background}>
            <div className='header-container'>

                <div>
                    <h1>Tech-<span>Ademy</span></h1>
                    {/* <p>Learn From The Best</p> */}
                </div>
                <div className='headerlinks'>
                    <Link to='/home'>Home</Link>
                    <Link to='courses'>Courses</Link>
                    <Link to='login'>login</Link>
                    <Link to='register'>Register</Link>
                </div>
            </div>


        </div>
    );
};

export default Header;