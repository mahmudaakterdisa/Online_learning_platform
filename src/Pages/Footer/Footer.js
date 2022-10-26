import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='icon-container'>
                <FaFacebookSquare className='spacing-icon'></FaFacebookSquare>
                <FaTwitterSquare className='spacing-icon'></FaTwitterSquare>
                <FaLinkedin className='spacing-icon'></FaLinkedin>
            </div>
            <div className='footer-text'>
                <p>Tearms of use . Privacy policy</p>
                <p>© Copyright, GFG</p>
            </div>


        </div>
    );
};

export default Footer;