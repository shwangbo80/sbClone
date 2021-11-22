import React, {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
const COFFEEMENU = require("../db/data.json")

function CoffeeComponent(props) {
    const [menu, setMenu] = useState(COFFEEMENU)
    return (
        <Container>
            <Row>
                <>
                    <Col className="menuContainer" md="4">
                        <div className="menuName">{menu[0].coffee[0].name}</div>
                        <img
                            className="menuImg"
                            src={menu[0].coffee[0].url}
                            alt={menu[0].coffee[0].name}
                        />
                    </Col>
                </>
            </Row>
        </Container>
    )
}

export default CoffeeComponent
