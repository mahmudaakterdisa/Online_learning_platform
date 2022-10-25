import React from 'react';
import { Link } from 'react-router-dom';

const Courseleft = ({ crinfo }) => {

    const { coursename, id } = crinfo;
    return (
        <div>



            <Link to={`/crinfo/${id}`}>{coursename}</Link>
        </div>
    );
};

export default Courseleft;