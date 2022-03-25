import './CartSection.css';

import React from 'react';
import SingleCart from '../SingleCart/SingleCart';

const CartSection = ({carts}) => {
    return (
        <div>           
            {
                carts.map((cart,index) => <SingleCart cart = {cart} key = {index}/>)
            }
        </div>
    );
};

export default CartSection;