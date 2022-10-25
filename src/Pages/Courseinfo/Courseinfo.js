import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courseinfo.css'

const Courseinfo = ({ courseinfo }) => {

    const { courseimg, coursename, id } = courseinfo

    return (
        <div className='courseinfo-container'>

            <div className='right-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={courseimg} />
                    <Card.Body>
                        <Card.Title>{coursename}</Card.Title>

                        <Link to={`/courseinfo/${id}`}>
                            <Button>Course Details</Button>
                        </Link>

                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Courseinfo;