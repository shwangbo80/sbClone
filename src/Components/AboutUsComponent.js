import React from "react"
import {Row, Col} from "react-bootstrap"

export default function AboutUsComponent() {
    return (
        <div>
            <Row>
                <Col></Col>
                <Col md="10">
                    <Row className="mt-5 px-5">
                        <Col md={2} className="m-2">
                            <p className="fw-bold">About Us</p>
                            <p>Our Heritage</p>
                            <p>Our Coffee</p>
                            <p>Stories and News</p>
                            <p>Investor Relations</p>
                            <p>Policies and Standards</p>
                            <p>Customer Service</p>
                        </Col>
                        <Col md={2} className="m-2">
                            <p className="fw-bold">Careers</p>
                            <p>Culture and Values</p>
                            <p>Inclusion, Diversity, and Equity</p>
                            <p>College Achievement Plan</p>
                            <p>U.S. Careers</p>
                            <p>International Careers</p>
                        </Col>
                        <Col md={2} className="m-2">
                            <p className="fw-bold">Social Impace</p>
                            <p>People</p>
                            <p>Planet</p>
                            <p>Environmental and Social Impact Reporting</p>
                        </Col>
                        <Col md={2} className="m-2">
                            <p className="fw-bold">For Business Partners</p>
                            <p>Landlord Support Center</p>
                            <p>Suppliers</p>
                            <p>Corporate Gift Card Sales</p>
                            <p>Office and Foodservice Coffee</p>
                        </Col>
                        <Col md={2} className="m-2">
                            <p className="fw-bold">Order and Pickup</p>
                            <p>Order on the App</p>
                            <p>Order on the Web</p>
                            <p>Delivery</p>
                            <p>Order and Pickup Options</p>
                            <p>Explore and Find Coffee for Home</p>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
