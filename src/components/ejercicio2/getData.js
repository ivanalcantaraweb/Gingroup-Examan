import React, { useState } from 'react';
import Cards from './cards';
import { Container, Row, Col, Button } from 'reactstrap';

export default function GetData() {
    const [results, setResult] = useState([]);



    const order = (type) => {
        let orderedByGender = [...results].sort((a, b) => a.gender.localeCompare(b.gender));
        let orderedbyId = [...results].sort((a, b) => a.id - b.id);
        switch (type) {
            case "0":
                setResult(orderedbyId);
                break;
            case "1":
                orderedbyId.reverse();
                setResult(orderedbyId);
                break;
            case "2":
                setResult(orderedByGender);
                break;
            case "3":
                orderedByGender.reverse();
                setResult(orderedByGender);
                break;
            default:
                break;
        }

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
                        <select onChange={(e) => order(e.target.value)}>
                            <option value="0">ID Ascendiente</option>
                            <option value="1">ID Descendiente</option>
                            <option value="2">Femenino</option>
                            <option value="3">Masculino</option>
                        </select>
                        <Button color="link" onClick={() => order(0)} > Borrar filtros de ordenamiento </Button><br /><br />
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
