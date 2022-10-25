import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courseinfo from '../Courseinfo/Courseinfo';
import Courseleft from '../Courseleft/Courseleft'
import './Courses.css'

const Courses = () => {
    const getCourseData = useLoaderData()

    return (

        <div className='courses-container'>
            <h2>
                Available Courses
            </h2>

            <div className='coursebody-container'>

                <div className='left-container'>
                    <h3>All Courses</h3>
                    {
                        getCourseData.map(crinfo => <Courseleft key={crinfo.id} crinfo={crinfo}></Courseleft>)
                    }
                </div>

                <div className='allcourses-container'>
                    {
                        getCourseData.map(courseinfo => <Courseinfo key={courseinfo.key} courseinfo={courseinfo}></Courseinfo>)

                    }
                </div>

            </div>


        </div>









    );
};

export default Courses;