import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Courseleft.css';

const Courseleft = ({ crinfo }) => {

    const { coursename, id } = crinfo;
    return (
        <div className='left-container'>


            <Card style={{ width: '18rem' }}>

                <ListGroup variant="flush">

                    <ListGroup.Item className='itemdiv'>
                        <Link to={`/crinfo/${id}`}>{coursename}</Link>
                    </ListGroup.Item>



                </ListGroup>
            </Card>



        </div>
    );
};

export default Courseleft;