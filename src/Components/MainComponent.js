import React, {useState} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {Container} from "react-bootstrap"

//Import Components
import NavComponent from "./NavComponent"
import FooterComponent from "./FooterComponent"
import HomeComponent from "./HomeComponent"
import MenuComponent from "./MenuComponent"
import AboutComponent from "./AboutComponent"
import GiftcardsComponent from "./GifrcardsComponent"
import LoginComponent from "./LoginComponent"
import AboutUsComponent from "./AboutUsComponent"
import CoffeeComponent from "./CoffeeComponent"

const COFFEEMENU = require("../db/data.json")

export default function MainComponent() {
  const [menu, setMenu] = useState(COFFEEMENU)
  const [selectedMenu, renderMenu] = useState("none")

  return (
    <Router>
      <Container fluid>
        <NavComponent />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/menu">
            <MenuComponent
              menu={menu}
              selectedMenu={selectedMenu}
              onMenuClick={renderMenu}
            />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/giftcards">
            <GiftcardsComponent />
          </Route>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/CoffeeTraveler">
            <CoffeeComponent
              menu={menu}
              selectedMenu={selectedMenu}
              onMenuClick={renderMenu}
            />
          </Route>
        </Switch>
        <AboutUsComponent />
        <FooterComponent />
      </Container>
    </Router>
  )
}
