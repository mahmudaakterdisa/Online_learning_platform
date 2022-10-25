import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Coursedetails.css'

const Coursedetails = () => {
    const getDetailsdata = useLoaderData();
    console.log(getDetailsdata);
    const { coursename, overview, price, enrolledstudent, instructorimg, instructorname } = getDetailsdata;
    return (
        <div className='courseDetails-container'>
            <div className='coursename'>
                <h2>{coursename}</h2>
            </div>
            <div>
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
                <button className='btn'>Buy Now</button>
            </div>

        </div>
    );
};

export default Coursedetails;