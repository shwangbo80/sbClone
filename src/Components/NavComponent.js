import React from "react"
import {Navbar, Container, Nav, Button, Image} from "react-bootstrap"

function NavbarComponent() {
    return (
        <div className="py-4 navContainer">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <Image
                            className="navLogo"
                            src="./img/starbucks_logo.png"
                            alt="Strabucks Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                        className="navLinks"
                        id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand href="/menu">Menu</Navbar.Brand>
                            <Navbar.Brand href="/about">About</Navbar.Brand>
                            <Navbar.Brand href="/contact">Contact</Navbar.Brand>
                        </Nav>
                        <Nav>
                            <Navbar.Brand href="/login">Login</Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
