import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Coursedetails.css'

const Coursedetails = () => {
    const getDetailsdata = useLoaderData();
    console.log(getDetailsdata);
    const { id } = getDetailsdata;
    return (
        <div>
            <h1>course details{id}</h1>
        </div>
    );
};

export default Coursedetails;