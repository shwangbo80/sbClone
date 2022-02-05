import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function MenuComponent(props) {
  return (
    <>
      <Router>
        <Container>
          <Row>
            <Col />
            <Col md="10">
              <h1>Menu</h1>
              <Row>
                {props.menu.map((menu) =>
                  menu.coffee.map((item, index) => {
                    return (
                      <>
                        <Col className="menuContainer" md="4">
                          <div className="menuName" key={index}>
                            {item.name}
                          </div>
                          <a href={`/${item.link}`}>
                            <img
                              className="menuImg"
                              src={item.url}
                              alt={item.name}
                            />
                          </a>
                        </Col>
                      </>
                    )
                  })
                )}
              </Row>
            </Col>
            <Col />
          </Row>
        </Container>
      </Router>
    </>
  )
}

export default MenuComponent
