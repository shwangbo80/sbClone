import React from "react"
import {Container, Row, Col, Navbar, Nav} from "react-bootstrap"
import {
    Rss,
    Facebook,
    Pinterest,
    Instagram,
    Youtube,
    Twitter,
} from "react-bootstrap-icons"

function FooterComponent() {
    return (
        <React.Fragment>
            <Container fluid className="bg-dark text-white pb-4">
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <div className="footerDiv">
                            <Rss size={20} className="footerIcons" />
                            <Facebook size={20} className="footerIcons" />
                            <Pinterest size={20} className="footerIcons" />
                            <Instagram size={20} className="footerIcons" />
                            <Youtube size={20} className="footerIcons" />
                            <Twitter size={20} className="footerIcons" />
                        </div>
                        <div className="footerDiv">
                            Privacy Policy | Terms of Use | CA Supply Chain Act
                            | Cookie Preferences
                        </div>
                        <div className="footerDiv">
                            © 2021 Starbucks Coffee Company. All rights
                            reserved.
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FooterComponent
