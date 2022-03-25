import './SingleBurgerCard.css';

import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleBurgerCard = ({burger}) => {
    const {name, price, picture} = burger;
    console.log(burger);
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='h50px'>{name}</Card.Title>
                        <Card.Text>
                            <span className='h3'>Price : {price}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleBurgerCard;