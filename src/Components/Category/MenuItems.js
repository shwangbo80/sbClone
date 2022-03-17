import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"

export default function MenuItems() {
  return (
    <Container fluid className="">
      <h2 className="fw-bold">Menu</h2>
      <h4 className="mt-5 fw-bold">Drinks</h4>
      <hr className="my-5" />
      <Row className="text-center menu-container">
        <Col sm={12} md={3} className="mt-4">
          <Image
            fluid
            src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
            className="drink-img d-inline"></Image>
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
