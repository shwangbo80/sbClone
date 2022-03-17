import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom"
import MenuItems from "./Category/MenuItems"
import HotCoffee from "./Category/HotCoffee"
import HotTeas from "./Category/HotTeas"
import HotDrinks from "./Category/HotDrinks"
import Flappuccino from "./Category/Flappuccino"
import ColdCoffees from "./Category/ColdCoffees"
import IcedTeas from "./Category/IcedTeas"
import ColdDrinks from "./Category/ColdDrinks"
import HotBreakfast from "./Category/HotBreakfast"
import Bakery from "./Category/Bakery"
import Lunch from "./Category/Lunch"
import SnacksAndSweets from "./Category/SnacksAndSweets"
import OatmealAndYogurt from "./Category/OatmealAndYogurt"
import WholeBean from "./Category/WholeBean"
import VIAInstant from "./Category/VIAInstant"

import ScrollToTop from "./ScrollTop"

function MenuComponent() {
  return (
    <Router>
      <Container className="px-5 mt-5">
        <Row className="menuContainer">
          <Col md={3} className="d-none d-md-block pe-5">
            <h5 className="fw-bold">Drinks</h5>
            <p>
              <Link to={`/hotcoffee`} className="removeLinkStyle text-dark">
                Hot Coffees
              </Link>
            </p>
            <Link to={`/hotteas`} className="removeLinkStyle text-dark">
              <p>Hot Teas</p>
            </Link>
            <Link to={`/hotdrinks`} className="removeLinkStyle text-dark">
              <p>Hot Drinks</p>
            </Link>
            <Link to={`/flappuccino`} className="removeLinkStyle text-dark">
              <p>Flappuccino</p>
            </Link>
            <Link to={`/coldcoffees`} className="removeLinkStyle text-dark">
              <p>Cold Coffees</p>
            </Link>
            <Link to={`/icedteas`} className="removeLinkStyle text-dark">
              <p>Iced Teas</p>
            </Link>
            <Link to={`/colddrinks`} className="removeLinkStyle text-dark">
              <p>Cold Drinks</p>
            </Link>
            <h5 className="fw-bold mt-5">Food</h5>
            <Link to={`/hotbreakfast`} className="removeLinkStyle text-dark">
              <p>Hot Breakfast</p>
            </Link>
            <Link to={`/bakery`} className="removeLinkStyle text-dark">
              <p>Bakery</p>
            </Link>
            <Link to={`/lunch`} className="removeLinkStyle text-dark">
              <p>Lunch</p>
            </Link>
            <Link to={`/snacksandsweets`} className="removeLinkStyle text-dark">
              <p>Snacks & Sweets</p>
            </Link>
            <Link
              to={`/oatmealandyogurt`}
              className="removeLinkStyle text-dark">
              <p>Oatmeal & Yogurt</p>
            </Link>
            <h5 className="fw-bold mt-5">At Home Coffee</h5>
            <Link to={`/wholebeans`} className="removeLinkStyle text-dark">
              <p>Whole Bean</p>
            </Link>
            <Link to={`/viainstant`} className="removeLinkStyle text-dark">
              <p>VIA Instant</p>
            </Link>
          </Col>

          <Col md={9} className="px-5">
            <ScrollToTop />
            <Switch>
              <Route exact path={`/`}>
                <MenuItems />
              </Route>
              <Route exact path={`/hotcoffee`}>
                <HotCoffee />
              </Route>
              <Route exact path={`/hotteas`}>
                <HotTeas />
              </Route>
              <Route exact path={`/hotdrinks`}>
                <HotDrinks />
              </Route>
              <Route exact path={`/flappuccino`}>
                <Flappuccino />
              </Route>
              <Route exact path={`/coldcoffees`}>
                <ColdCoffees />
              </Route>
              <Route exact path={`/icedteas`}>
                <IcedTeas />
              </Route>
              <Route exact path={`/colddrinks`}>
                <ColdDrinks />
              </Route>
              <Route exact path={`/hotbreakfast`}>
                <HotBreakfast />
              </Route>
              <Route exact path={`/bakery`}>
                <Bakery />
              </Route>
              <Route exact path={`/lunch`}>
                <Lunch />
              </Route>
              <Route exact path={`/snacksandsweets`}>
                <SnacksAndSweets />
              </Route>
              <Route exact path={`/oatmealandyogurt`}>
                <OatmealAndYogurt />
              </Route>
              <Route exact path={`/wholebeans`}>
                <WholeBean />
              </Route>
              <Route exact path={`/viainstant`}>
                <VIAInstant />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default MenuComponent
