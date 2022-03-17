import React from "react"
import {Row, Col, Container} from "react-bootstrap"
import {Cpu} from "react-bootstrap-icons"

export default function AboutUsComponent() {
  return (
    <div>
      <hr className="my-5" />
      <Container fluid className="hr-space">
        <Row>
          <Col></Col>
          <Col md={12} lg={10} xxl={6}>
            <Row className="m-5 about-container">
              <Col md={6} lg={3} className="my-2 px-4">
                <p className="fw-bold">About Us</p>
                <p>Our Heritage</p>
                <p>Our Coffee</p>
                <p>Stories and News</p>
                <p>Investor Relations</p>
                <p>Policies and Standards</p>
                <p>Customer Service</p>
              </Col>
              <Col md={6} lg={3} className="my-2 px-4">
                <p className="fw-bold">Careers</p>
                <p>Culture and Values</p>
                <p>Inclusion, Diversity, and Equity</p>
                <p>College Achievement Plan</p>
                <p>U.S. Careers</p>
                <p>International Careers</p>
              </Col>
              <Col md={6} lg={3} className="my-2 px-4">
                <p className="fw-bold">Social Impace</p>
                <p>People</p>
                <p>Planet</p>
                <p>Environmental and Social Impact</p>
              </Col>
              <Col md={6} lg={3} className="my-2 px-4">
                <p className="fw-bold">For Business Partners</p>
                <p>Landlord Support Center</p>
                <p>Suppliers</p>
                <p>Corporate Gift Card Sales</p>
                <p>Office and Foodservice Coffee</p>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}
