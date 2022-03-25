import './SingleBurgerCard.css';

import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FaCartArrowDown, FaHamburger } from 'react-icons/fa';

const SingleBurgerCard = ({ burger }) => {
    const { name, price, picture } = burger;
    // console.log(burger);
    return (
        <div>

            <Col>
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='h50px'>{name}</Card.Title>
                        <Card.Text>
                            <span className='h3'>Price : {price}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className='w-100 fw-bold' variant="outline-info">Add to Cart <FaCartArrowDown /></Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleBurgerCard;