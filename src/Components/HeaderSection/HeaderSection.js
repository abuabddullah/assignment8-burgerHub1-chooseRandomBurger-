import './HeaderSection.css';

import React from 'react';
import { FaCalculator, FaHamburger } from 'react-icons/fa';

const HeaderSection = () => {
    return (
        <div>
            <div className="bg-light py-2 text-center text-warning border-bottom">
                <h1 className='display-3 fw-bold'>Burger's Hub <FaHamburger/></h1>
                <p className='text-info'><strong>Choose & Live . . .</strong></p>
            </div>
        </div>
    );
};

export default HeaderSection;