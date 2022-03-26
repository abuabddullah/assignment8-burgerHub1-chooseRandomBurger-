import './PropsVsStateTable.css'

import React from 'react';
import { Table } from 'react-bootstrap';

const PropsVsStateTable = () => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Props are used to pass information <strong>unidirectionally</strong> from parents components</td>
                        <td>State must be used in the same component</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Props are <strong>read only</strong> i.e we can use its value but cant change it</td>
                        <td>State are change able</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Props are set and passed by attribute style</td>
                        <td>State are set or updated by setState function</td>
                    </tr>
                    
                    
                </tbody>
            </Table>
        </div>
    );
};

export default PropsVsStateTable;