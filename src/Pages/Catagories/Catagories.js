import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Catgories.css'

const Catagories = ({ catagory }) => {

    const { catagoriestitle, catagoriesimg, availablecourses } = catagory;
    return (
        <div className='catagories-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={catagoriesimg} />
                <Card.Body className='card-container'>
                    <Card.Title className='card-title'>{catagoriestitle}</Card.Title>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Catagories;