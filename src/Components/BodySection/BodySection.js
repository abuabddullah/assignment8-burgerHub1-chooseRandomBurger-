import './BodySection.css'

import React from 'react';
import DisplaySection from '../DisplaySection/DisplaySection';

const BodySection = () => {
    return (
        <div className="px-3 py-5 row">

            <div className="col-md-9">
                <DisplaySection />
            </div>
            <div className="col-md-3">
                <h1>tis is CartSection</h1>
            </div>

        </div>
    );
};

export default BodySection;