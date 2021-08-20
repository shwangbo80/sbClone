import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'

function FooterComponent() {
    return (
        <React.Fragment>
            <Container fluid className="bg-dark text-white">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <Col md={4}>
                                <p>Footer</p>
                            </Col>
                            <Col md={4}>
                                <p>Footer</p>
                            </Col>
                            <Col md={4}>
                                <p>Footer</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FooterComponent;