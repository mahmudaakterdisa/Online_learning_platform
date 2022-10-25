import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Catgories.css'

const Catagories = ({ catagory }) => {
    console.log(catagory);
    const { catagoriestitle, catagoriesimg, availablecourses } = catagory;
    return (
        <div className='catagories-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={catagoriesimg} />
                <Card.Body className='card-container'>
                    <Card.Title className='card-title'>{catagoriestitle}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>

        </div>
    );
};

export default Catagories;