import './SingleCart.css';

import React from 'react';
import { FaCalendarTimes } from "react-icons/fa";

const SingleCart = ({cart,removeFromCart}) => {
    const {name, picture, price} = cart;


    return (
        <div className='row bg-white shadow p-3 mb-3 rounded-pill align-items-center'>
            <div className="col-3">
                <img className='img-fluid rounded-circle' src={picture} alt="" />
            </div>
            <div className="col-6">
                <h6>{name}</h6>
                <h4>$</h4><strong>{price}</strong>
            </div>
            <div className="col-3">
                <FaCalendarTimes onClick={() => removeFromCart(cart)}/>
            </div>
        </div>
    );
};

export default SingleCart;