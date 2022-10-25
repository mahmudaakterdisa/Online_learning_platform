import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const getLoderData = useLoaderData();
    console.log(getLoderData);
    return (
        <div>
            <h1>home:{getLoderData.length}</h1>
        </div>
    );
};

export default Home;