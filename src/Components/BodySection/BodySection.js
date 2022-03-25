import './BodySection.css'

import React, { useState } from 'react';
import DisplaySection from '../DisplaySection/DisplaySection';
import CartSection from '../CartSection/CartSection';
import { Button } from 'react-bootstrap';
import RandomChooseModal from '../RandomChooseModal/RandomChooseModal';

const BodySection = () => {

    // click to add in cart
    const [carts, setCarts] = useState([]);
    const clickToAddCart = (burger) => {
        let newCarts = [];
        if (carts.indexOf(burger) === -1) {
            newCarts = [...carts, burger];
            if (newCarts.length <= 4) {
                setCarts(newCarts);
            } else {
                alert('You can only select up to 4 burgers');
            }

        } else {
            alert('This burger is already in your cart');
        }


        // let newCarts = [...carts, burger];
        // setCarts(newCarts);
    }


    // remove one by one per cllick from cart
    const removeFromCart = (item) => {
        // console.log(item);
        let newCarts = [...carts];
        let index = newCarts.indexOf(item);
        newCarts.splice(index, 1);
        setCarts(newCarts);
    }


    // remove all from cart
    const removeAllFromCart = () => {
        setCarts([]);
    }

    return (
        <div className="row">

            <div className="col-md-9">
                <DisplaySection clickToAddCart={clickToAddCart} />
            </div>
            <div className="col-md-3 mt-5 mt-md-0 p-4 bg-warning cartSectionHolder text-center">
                <h3>Your Carts !!</h3>
                <p className=' mb-4'>Selected Items : {carts.length}</p>
                <CartSection carts={carts} removeFromCart={removeFromCart} />
                <div className='mt-4'>
                    
                    <p>
                        <Button onClick={removeAllFromCart} variant="outline-dark">Choose Again</Button>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default BodySection;