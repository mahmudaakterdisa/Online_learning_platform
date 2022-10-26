import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Wellcome.css'

const Wellcome = () => {
    const getwellcomeData = useLoaderData();
    const { coursename, id, instructorname } = getwellcomeData;
    return (
        <div className='wellcomepage-container'>
            {/* <div>

            </div> */}
            <p><strong>Congratulation!!</strong>You are now sucessfully enrolled!!</p>
            <h3><span>Your course Id</span>: {id}</h3>
            <h3> <span>Your course Name</span>: {coursename}</h3>
            <h3><span>Your Instructor Name</span>: {instructorname}</h3>


        </div>
    );
};

export default Wellcome;