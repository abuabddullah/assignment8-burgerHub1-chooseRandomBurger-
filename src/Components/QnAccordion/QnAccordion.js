import './QnAccordion.css'
import React from 'react';
import { Accordion } from 'react-bootstrap';

const QnAccordion = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>#1 How React Works ?</Accordion.Header>
                    <Accordion.Body>

                        <p>
                            React works generating of Virtual DOM.
                        </p>

                        <p>
                            Directly Changing or updating Actual DOM is tough and critical for React that's reason React Generates a replica of Actual DOM which is called <strong>Virtual DOM</strong>.
                        </p>

                        <p>
                            At first if any changes occurs in Virtual DOM then Ract starts comparing between Virtual DOM and Actual Dom by the help of <strong>Diff Algorithm</strong>. Thats why react can easily find out the place where the actual changes will take place then it just update the effect on the Actual DOM. 
                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>#3 How use state works ?</Accordion.Header>
                    <Accordion.Body>
                      
                        <p>
                            <strong>useState</strong> is a <strong>React Hook</strong> which is must use when we want any changes in our DOM state.
                        </p>
                      
                        <p>
                        <strong>Array Destructuring</strong> method is essential during declaring useState.
                        Cause useState holds basically two type of values, 
                        <ol>
                            <li>the <strong>state variable</strong> to store initial value of the state &</li>
                            <li>the <strong>setState funtion</strong> to set or update state's value as per requirement</li>
                        </ol>
                        </p>

                        <p>
                            And then we can use the  updated <strong>state variable</strong> for next process
                        </p>

                        <p className='text-center'><code>useState is essential to import from 'react'</code></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QnAccordion;