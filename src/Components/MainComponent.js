import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {Container} from "react-bootstrap"

//Import Components
import NavComponent from "./NavComponent"
import FooterComponent from "./FooterComponent"
import HomeComponent from "./HomeComponent"
import MenuComponent from "./MenuComponent"
import AboutComponent from "./AboutComponent"
import ContactComponent from "./ContactComponent"
import LoginComponent from "./LoginComponent"
import AboutUsComponent from "./AboutUsComponent"
import CoffeeComponent from "./CoffeeComponent"

export default function MainComponent() {
    return (
        <Router>
            <Container fluid>
                <NavComponent />
                <Switch>
                    <Route exact path="/">
                        <HomeComponent />
                    </Route>
                    <Route path="/menu">
                        <MenuComponent />
                    </Route>
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    <Route path="/contact">
                        <ContactComponent />
                    </Route>
                    <Route path="/login">
                        <LoginComponent />
                    </Route>
                    <Route path="/CoffeeTraveler">
                        <CoffeeComponent name="test" />
                    </Route>
                </Switch>
                <AboutUsComponent />
                <FooterComponent />
            </Container>
        </Router>
    )
}
