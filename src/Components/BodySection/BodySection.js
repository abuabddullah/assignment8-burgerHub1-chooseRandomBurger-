import './BodySection.css'

import React from 'react';
import DisplaySection from '../DisplaySection/DisplaySection';

const BodySection = () => {
    return (
        <div className="row">

            <div className="col-md-9">
                <DisplaySection />
            </div>
            <div className="col-md-3 mt-5 mt-md-0">
                <h1>tis is CartSection</h1>
            </div>

        </div>
    );
};

export default BodySection;