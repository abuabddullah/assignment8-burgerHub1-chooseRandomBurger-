import './CartSection.css';

import React from 'react';
import SingleCart from '../SingleCart/SingleCart';

const CartSection = ({carts,removeFromCart}) => {
    return (
        <div>           
            {
                carts.map((cart,index) => <SingleCart cart = {cart} key = {index} removeFromCart ={removeFromCart}/>)
            }
        </div>
    );
};

export default CartSection;