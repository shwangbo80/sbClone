import React from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavbarComponent() {
    return (
        <div className="py-4">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        CAFE
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Navbar.Brand href="/menu">MENU</Navbar.Brand>
                            <Navbar.Brand href="/about">ABOUT</Navbar.Brand>
                            <Navbar.Brand href="/contact">CONTACT</Navbar.Brand>
                        </Nav>
                        <Nav>
                            <a href="/login">
                                <Button className="btn-light">
                                    Login
                                </Button>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;