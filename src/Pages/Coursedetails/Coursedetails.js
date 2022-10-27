import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Generatepdf from '../Generatepdf/Generatepdf';

import './Coursedetails.css'

const Coursedetails = () => {
    const getDetailsdata = useLoaderData();

    const { coursename, overview, price, enrolledstudent, instructorimg, instructorname, id, courseimg } = getDetailsdata;
    return (
        <div className='courseDetails-container'>
            <div>
                <img src={courseimg} alt="" />
            </div>
            <div className='coursename'>
                <h2>{coursename}</h2>
            </div>
            <div>
                <Generatepdf></Generatepdf>

            </div>
            <div className='overview'>
                <p>{overview}</p>
            </div>
            <div className='allinfo-container'>
                <div className='instructor'>
                    <img src={instructorimg} alt="instructorimage" />
                    <p><strong>{instructorname}</strong></p>
                </div>

                <p><strong>Enrolled-Students:</strong> <span>{enrolledstudent}</span> </p>
                <p> <strong>Price:</strong> <span>{price}</span> </p>
            </div>
            <div className='button-container'>
                <Link to={`/getDetailsdata/${id}`}>
                    <button className='btn'>Get premium Access</button>
                </Link>

            </div>

        </div>
    );
};

export default Coursedetails;