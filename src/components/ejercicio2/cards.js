import React from 'react';
import { Col } from 'reactstrap';
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const Cards = ({ data }) => {
    return (
        <Col sm="12" md="6" xl="4" id={data.id} className="CardIndividual">
            <Card>
                <CardBody>
                    <CardTitle><b>id:</b> {data.id} </CardTitle>
                    <div><b>Nombre:</b> {data.first_name} </div>
                    <div><b>Apellido:</b> {data.last_name}</div>
                    <div className={data.gender}><b>Género:</b> {data.gender}</div>
                    <div><b>Email:</b>  {data.email}</div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Cards;
