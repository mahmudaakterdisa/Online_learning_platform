import React from 'react';
import { Link } from 'react-router-dom';

const Courseleft = ({ crinfo }) => {
    console.log(crinfo);
    const { coursename } = crinfo;
    return (
        <div>



            <Link to=''>{coursename}</Link>
        </div>
    );
};

export default Courseleft;