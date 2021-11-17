import React, {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import {CAMPSITES} from "../db/data2"

function MenuComponent() {
    const [menu, setMenu] = useState(CAMPSITES)
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md="2">
                        <p>Drinks</p>
                    </Col>
                    <Col md="10">
                        <p>Menu</p>
                        {menu.map((item, key) => {
                            console.log(item)
                            return (
                                <>
                                    <p key={key}>{item[0].comments.rating}</p>
                                </>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default MenuComponent
