import React from "react"
import {Container, Row, Col} from "react-bootstrap"

function CoffeeComponent(props) {
    return (
        <Container>
            <Row>
                <Col />
                <Col md="8">
                    <div className="menuName">
                        {props.menu[0].coffee[0].name}
                    </div>
                    <img
                        className="menuImg"
                        src={props.menu[0].coffee[0].url}
                        alt={props.menu[0].coffee[0].name}
                    />
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

export default CoffeeComponent
