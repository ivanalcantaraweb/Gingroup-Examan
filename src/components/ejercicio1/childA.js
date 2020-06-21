import React from 'react';
import GrandChild from './grandchild';

const ChildA = ({ getEnergy, toggle }) => {
    return (
        <div className="child1 msgChild">
            <div className="Msg">
                Este es un elemento ChildA
            </div>
            <GrandChild getEnergy={getEnergy} toggle={toggle} />
        </div>
    );
};

export default ChildA