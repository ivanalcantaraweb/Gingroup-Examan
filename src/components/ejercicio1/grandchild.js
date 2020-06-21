import React from 'react';
import { Button } from 'reactstrap';

const GrandChild = ({ getEnergy, toggle }) => {
    return (
        <div className="grandchild msgGrandChild">
            <div className="Msg">
                Este es un elemento GrandChild
            </div>
            <Button color="primary" onClick={() => getEnergy(toggle)}>
                encender / apagar
            </Button>
        </div>
    );
};

export default GrandChild