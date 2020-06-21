import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChildA from './childA';
import ChildB from './childB';
import Header from '../header';

const Parent = () => {
    const [energy, getEnergy] = useState(false);
    const toggle = () => getEnergy(!energy);
    return (
        <div>
            <Header />
            <Container fluid={true} className="parent msgParent">
                <Row>
                    <Col>
                        <div className="Msg">
                            Este es un elemento padre
                        </div>
                    </Col>
                </Row>
                <Row>

                    <Col sm="12" md="6" className="childContainer">
                        <ChildA getEnergy={getEnergy} toggle={toggle} />
                    </Col>
                    <Col sm="12" md="6" className="childContainer">
                        <ChildB energy={energy} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Parent