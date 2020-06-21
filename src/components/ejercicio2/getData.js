import React, { useState } from 'react';
import Cards from './cards';
import { Container, Row, Col, Button } from 'reactstrap';

export default function GetData() {
    const [results, setResult] = useState([]);
    const orderByGender = (type) => {
        let ordered = [...results].sort((a, b) => a.gender.localeCompare(b.gender))
        if (!type)
            ordered.reverse()
        setResult(ordered)
    }
    const orderById = (type) => {
        let ordered = [...results].sort((a, b) => a.id - b.id);
        if (!type)
            ordered.reverse();
        setResult(ordered);
    }
    async function fetchData() {
        const res = await fetch("https://gorest.co.in/public-api/users", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer Aqd6Jjz5xph5Y3035KJgmwJY0DEctv4isMF6`
            }
        });
        res.json().then(res => setResult(res.result))
            .catch(console.log);
    }
    return (
        <div className="getdata">
            <Container>
                <Row>
                    <Col xl="6">
                        <span> Consumir API de tarjetas de Usuario via <i>https://gorest.co.in</i></span>
                    </Col>
                    <Col xl="6">
                        <span>Ordenar por: </span>
                        <select>
                            <option value="Ascendiente" onClick={() => orderById(1)} >ID Ascendiente</option>
                            <option value="Descendiente" onClick={() => orderById(0)}>ID Descendiente</option>
                            <option value="Masculino" onClick={() => orderByGender(0)}>Masculino</option>
                            <option value="Femenino" onClick={() => orderByGender(1)}>Femenino</option>
                        </select>
                        <Button color="link" onClick={() => orderById(1)} > Borrar filtros de ordenamiento </Button><br /><br />
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className="btnApi">
                        <Button color="primary" onClick={() => fetchData()} > Mostrar tarjetas </Button>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    {results.map(result => {
                        return <Cards key={result.id} data={result} />
                    })}
                </Row>
            </Container>
        </div >
    )
};
