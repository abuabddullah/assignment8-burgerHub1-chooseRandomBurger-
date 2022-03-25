import './BodySection.css'

import React, { useState } from 'react';
import DisplaySection from '../DisplaySection/DisplaySection';

const BodySection = () => {

    // click to add in cart
    const [carts, setCarts] = useState([]);
    const clickToAddCart = (burger) => {
        let newCarts = [...carts, burger];
        setCarts(newCarts);
    }

console.log(carts);

    return (
        <div className="row">

            <div className="col-md-9">
                <DisplaySection clickToAddCart = {clickToAddCart} />
            </div>
            <div className="col-md-3 mt-5 mt-md-0">
                <h1>tis is CartSection</h1>
            </div>

        </div>
    );
};

export default BodySection;