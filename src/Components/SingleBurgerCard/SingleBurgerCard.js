import './SingleBurgerCard.css';

import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { FaCartArrowDown } from 'react-icons/fa';

const SingleBurgerCard = ({ burger,clickToAddCart }) => {
    const { name, price, picture } = burger;
    // console.log(burger);


    return (
        <div>

            <Col>
                <Card className='shadow'>
                    <Card.Img className='img-fluid' variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title className='h50px'>{name}</Card.Title>
                        <Card.Text>
                            <span className='h3'>Price : {price}</span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => clickToAddCart(burger)} className='w-100 fw-bold' variant="outline-warning">Add to Cart <FaCartArrowDown /></Button>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default SingleBurgerCard;