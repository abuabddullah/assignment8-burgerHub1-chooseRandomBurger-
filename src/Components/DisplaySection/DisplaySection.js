import './DisplaySection.css'

import React, { useEffect, useState } from 'react';
import {Row} from 'react-bootstrap';
import SingleBurgerCard from '../SingleBurgerCard/SingleBurgerCard';

const DisplaySection = ({clickToAddCart}) => {

    // loading and setting data from json file by useState and useEffect
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('burgers.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setBurgers(data))
    }, [])

    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">

            {
                burgers.map(burger => <SingleBurgerCard clickToAddCart = {clickToAddCart} key={burger.id} burger = {burger}/>)
            }
            
            </Row>
            
        </div>
    );
};

export default DisplaySection;