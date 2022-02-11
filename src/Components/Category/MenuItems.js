import React from "react"
import {Container, Row, Col, Image} from "react-bootstrap"

export default function MenuItems() {
  return (
    <Container fluid className="my-5">
      <h2 className="fw-bold">Menu</h2>
      <h4 className="mt-5 fw-bold">Drinks</h4>
      <hr className="my-5" />
      <Row>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Coffees</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Drinks</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Cold Coffees</p>
          </div>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Cold Drinks</p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Teas</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Frappuccino Blended Drinks</p>
          </div>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Iced Teas</p>
          </div>
        </Col>
      </Row>
      <h4 className="fw-bold mt-5">Food</h4>
      <hr className="my-5" />
      <Row>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Coffees</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Drinks</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Cold Coffees</p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Teas</p>
          </div>
          <div className="my-5">
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Frappuccino Blended Drinks</p>
          </div>
        </Col>
      </Row>
      <h4 className="fw-bold mt-5">At Home Coffee</h4>
      <hr className="my-5" />
      <Row>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Cold Drinks</p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Image
              fluid
              src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
              className="drink-img d-inline"></Image>
            <p className="d-inline ms-4">Hot Teas</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
