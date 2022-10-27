import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'
import classes from '../Background/Background.module.css'
import { GrSwift, GrFirefox } from "react-icons/gr";
import { useContext } from 'react';
import Authprovider, { Authcontext } from '../Authprovider/Authprovider';
import { FaUserGraduate } from "react-icons/fa";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {

    const { user, logout } = useContext(Authcontext);
    const [changemode, setChangemode] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [mode, setMode] = useState("Dark Mode");
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }


    const handlemode = () => {

        if (changemode.color == 'white') {

            setChangemode({
                color: 'black',
                backgroundColor: 'white'
            })
            setMode('Light-Mode')
        }

        else {

            setChangemode({
                color: 'white',
                backgroundColor: 'black'
            })
            setMode('Dark Mode')
        }

    }



    return (
        <div className={classes.background}>
            <div className='header-container'>

                <div className='website-name'>
                    <h1><GrFirefox></GrFirefox> Tech-<span>Ademy</span></h1>
                    <p>Learn From The Best</p>
                </div>


                <div className='headerlinks'>
                    <div>
                        <Link to='/home'>Home</Link>
                        <Link to='courses'>Courses</Link>
                        <Link to='faq'>FAQ</Link>
                        <Link to='blogs'>Blog</Link>


                    </div>





                    <div className='logout-container'>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut}>Logout</button>
                                :

                                <>
                                    <Link to='login'>Login</Link>
                                    <Link to='register'>Register</Link>

                                </>
                        }
                    </div>



                    <div className='image-container'>


                        {user?.photoURL ?
                            <div className='img__wrap'>
                                <img src={user?.photoURL} alt="" />
                                <span className="img__description">{user.displayName}</span>

                            </div>


                            : <FaUserGraduate></FaUserGraduate>
                        }

                    </div>

                    <div className='mode-button'>
                        <Button onClick={handlemode}>{mode}</Button>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Header;