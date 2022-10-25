import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagories from '../Catagories/Catagories';
import './Home.css'

const Home = () => {
    const getLoderData = useLoaderData();
    console.log(getLoderData);
    return (
        <div className='home-container'>
            <div className='catagories-title'>
                <h2>Course Catagories</h2>
            </div>
            <div className='catagories-course'>
                {
                    getLoderData.map(catagory => <Catagories key={catagory.id} catagory={catagory}></Catagories>)
                }
            </div>


        </div>
    );
};

export default Home;