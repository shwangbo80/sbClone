import React, {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
const COFFEEMENU = require("../db/data.json")

function MenuComponent() {
    const [menu, setMenu] = useState(COFFEEMENU)
    return (
        <>
            <Router>
                <Container>
                    <Row>
                        <Col md="3">
                            <p>Drinks</p>
                            <Row>
                                {menu.map((menu) =>
                                    menu.type.map((item, index) => {
                                        return (
                                            <>
                                                <Col md="12">
                                                    <div key={index}>
                                                        {item.name}
                                                    </div>
                                                </Col>
                                            </>
                                        )
                                    })
                                )}
                            </Row>
                        </Col>
                        <Col md="9">
                            <p>Menu</p>
                            <Row>
                                {menu.map((menu) =>
                                    menu.coffee.map((item, index) => {
                                        return (
                                            <>
                                                <Col
                                                    className="menuContainer"
                                                    md="4">
                                                    <div
                                                        className="menuName"
                                                        key={index}>
                                                        {item.name}
                                                    </div>
                                                    <a href={`/${item.link}`}>
                                                        <img
                                                            className="menuImg"
                                                            src={item.url}
                                                            alt={item.name}
                                                        />
                                                    </a>
                                                </Col>
                                            </>
                                        )
                                    })
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </>
    )
}

export default MenuComponent
