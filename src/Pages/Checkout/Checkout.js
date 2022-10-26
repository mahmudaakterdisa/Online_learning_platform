import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkoutdetails.css';

const Checkout = () => {
    const checkoutdata = useLoaderData();
    console.log(checkoutdata);
    const { coursename, instructorname, enrolledstudent, courseimg, price } = checkoutdata;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full checkout-container">
            <figure><img src={courseimg} alt="courseimg" /></figure>
            <div className="card-body">
                <h2 className="card-title">{coursename}</h2>
                <p><strong>InstructorName</strong>: {instructorname}</p>
                <p><strong>Price</strong>: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;