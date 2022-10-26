import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'
import classes from '../Background/Background.module.css'
import { GrSwift, GrFirefox } from "react-icons/gr";
import { useContext } from 'react';
import Authprovider, { Authcontext } from '../Authprovider/Authprovider';
import { FaUserGraduate } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Header = () => {

    const { user, logout } = useContext(Authcontext);

    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
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
                        {/* <Link to='login'>Login</Link>
                    <Link to='register'>Register</Link> */}

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
                </div>

            </div>


        </div>
    );
};

export default Header;