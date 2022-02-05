import React from "react"
import {Container, Row, Col, Image, Button} from "react-bootstrap"

function HomeComponent() {
  return (
    <React.Fragment>
      <Container fluid>
        <div className="hero-image"></div>
        {/* <div className="videoContainer">
          <video autoPlay muted loop className="videoBg">
            <source src="./img/video.mp4" type="video/mp4" />
          </video>
          <div className="headlineContainer">
            <div className="headlines">
              <h1 className="videoHeadline headlineLarge">
                COFFEE ALL THE WAY TO FREE FAVORITES
              </h1>
              <h4 className="videoHeadline">
                Join Starbucks® Rewards for delicious deals & exclusive offers.
              </h4>
              <a className="removeLinkStyle" href="/">
                <h4 className="videoLink">Learn more</h4>
              </a>
            </div>
          </div>
        </div> */}
        <Row>
          <Col></Col>
          <Col xl={10} xxl={6}>
            <Row className="alert-success text-center p-5 my-4 guideLine">
              <Col></Col>
              <Col lg="10">
                <h4>
                  Following CDC guidance, facial coverings are recommended in
                  our stores for all customers, and are required where mandated
                  by local law. Learn more
                </h4>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="textContainer bg-success text-light text-center grid-center">
                <div className="my-5">
                  <p className="">
                    Your qualifying purchases have been earning you plays. Play
                    the Summer Game for a chance to win cool prizes.
                  </p>
                  <Button variant="outline-light" className="outline-dark mt-3">
                    Play now
                  </Button>
                </div>
              </Col>
              <Col md={6} className="imgContainer">
                <Image
                  fluid
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72796.jpg"
                />
              </Col>
            </Row>

            <Row>
              <Col md={6} className="imgContainer">
                <Image
                  fluid
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72970.jpg"
                />
              </Col>
              <Col
                md={6}
                className="textContainer bg-light text-dark text-center grid-center">
                <div className="textContainer my-5">
                  <p>STARBUCKS REFRESHERS® BEVERAGES</p>
                  <p>
                    Quench your summer thirst with vibrant Mango Dragonfruit,
                    Strawberry Açaí and Kiwi Starfruit Starbucks Refreshers®
                    beverages.
                  </p>
                  <Button variant="outline-dark" className="outline-dark mt-3">
                    Iced Beverages
                  </Button>
                </div>
              </Col>
            </Row>

            <Row>
              <Col
                md={6}
                className="imgContainer bg-light text-dark text-center grid-center">
                <Image
                  fluid
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73001.jpg"
                />
                <div className="my-5">
                  <h4 className="">Order and pick up. Easy as that.</h4>
                  <p className="px-5">
                    Our Frappuccino® drinks were made for summer fun. Treat
                    yourself to Mocha Cookie Crumble or Caramel Ribbon Crunch.
                  </p>
                  <Button variant="outline-dark" className="outline-dark">
                    Order Frapuccino drink
                  </Button>
                </div>
              </Col>

              <Col
                md={6}
                className="imgContainer bg-light text-dark text-center">
                <Image
                  fluid
                  src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73002.jpg"
                />
                <h4 className="mt-5">Floating into summer like…</h4>
                <p className="px-5">
                  Our Frappuccino® drinks were made for summer fun. Treat
                  yourself to Mocha Cookie Crumble or Caramel Ribbon Crunch.
                </p>
                <Button variant="outline-dark" className="outline-dark mb-5">
                  Order Frapuccino drink
                </Button>
              </Col>
            </Row>

            <Row className="my-5">
              <Col
                lg={12}
                className="textContainer bg-light text-dark text-center grid-center">
                <div className="my-5">
                  <Image
                    fluid
                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72972.jpg"
                  />
                  <h4 className="mt-5">50 years of serving communities</h4>
                  <p>
                    From the beginning, Starbucks has been about more than just
                    coffee. See how our partners (employees) and customers
                    strengthen our local communities.{" "}
                  </p>
                  <Button variant="outline-dark" className="outline-dark mt-3">
                    Learn more
                  </Button>
                </div>
              </Col>
              <Col lg={12} className="imgContainer"></Col>
            </Row>

            <Row className="my-5 text-center">
              <p className="my-4 px-5">
                *NO PURCHASE NECESSARY. Participating stores only. Ends 8/22/21.
                To play and for Official Rules, visit starbuckssummergame.com.
              </p>
              <p className="my-4 px-5">
                **Menu limited. Restricted delivery area. Available in
                participating locations only. Fees subject to change. Prices for
                Starbucks® items purchased through Uber Eats may be higher than
                posted in stores or as marked. See the Uber Eats app for
                details.
              </p>
            </Row>
            <hr />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default HomeComponent
