import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export default function HotCoffee() {
    return (
        <Container fluid>
            <div>
                <a href="/menu" className="removeLinkStyle text-dark">
                    <p className="d-inline me-2">Menu</p>
                </a>
                <p className="d-inline text-dark">/ Hot Coffee</p>
            </div>
            <div className="d-inline"></div>
            <h2 className="fw-bold mb-5 mt-2">Hot Coffee</h2>
            <h4 className="fw-bold">Americanos</h4>
            <hr></hr>
            <Row className="text-center menu-container">
                <Col sm={12} md={3} className="mt-4">
                    <a href="/menu/hotcoffee/americano">
                        <Image
                            fluid
                            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
                            className="drink-img d-inline"></Image>
                    </a>
                    <p className="mt-3">Cafe Americano</p>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <h4 className="fw-bold mt-5 ms-5s">Brewed Coffees</h4>
            <hr></hr>
            <Row className="my-5 text-center">
                <Col md={3}>
                    <Image
                        fluid
                        src="https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_topcrop_630"
                        className="drink-img d-inline"></Image>
                    <p className="mt-3">Veranda Blend</p>
                </Col>
                <Col md={3}>
                    <Image
                        fluid
                        src="https://globalassets.starbucks.com/assets/62cada05d1f64f79bf42f9544cffaae1.jpg?impolicy=1by1_wide_topcrop_630"
                        className="drink-img d-inline"></Image>
                    <p className="mt-3">Cafe Misto</p>
                </Col>
                <Col md={3}>
                    <Image
                        fluid
                        src="https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_topcrop_630"
                        className="drink-img d-inline"></Image>
                    <p className="mt-3">Featured Starbucks Dark Roast Coffee</p>
                </Col>
                <Col md={3}>
                    <Image
                        fluid
                        src="https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_topcrop_630"
                        className="drink-img d-inline"></Image>
                    <p className="mt-3">Pike Place Roast</p>
                </Col>
                <Col md={3}>
                    <Image
                        fluid
                        src="https://globalassets.starbucks.com/assets/bffaf0f27e124801abcabe09f05b0fb2.jpg?impolicy=1by1_wide_topcrop_630"
                        className="drink-img d-inline"></Image>
                    <p className="mt-3">Decaf Pike Place Roast</p>
                </Col>
            </Row>
        </Container>
    )
}
