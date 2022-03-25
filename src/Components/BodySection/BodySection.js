import './BodySection.css'

import React, { useState } from 'react';
import DisplaySection from '../DisplaySection/DisplaySection';
import CartSection from '../CartSection/CartSection';

const BodySection = () => {

    // click to add in cart
    const [carts, setCarts] = useState([]);
    const clickToAddCart = (burger) => {
        let newCarts = [...carts, burger];
        setCarts(newCarts);
    }

// console.log(carts);

    return (
        <div className="row">

            <div className="col-md-9">
                <DisplaySection clickToAddCart = {clickToAddCart} />
            </div>
            <div className="col-md-3 mt-5 mt-md-0 p-4 bg-warning cartSectionHolder">
                <h3 className='text-center'>Your Carts !!</h3>
                <p className=' mb-4 text-center'>Selected Items : {carts.length}</p>
                <CartSection carts ={carts}/>
            </div>

        </div>
    );
};

export default BodySection;