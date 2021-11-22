import React from "react"
import {Container, Row, Col, Image, Button} from "react-bootstrap"

function HomeComponent() {
    return (
        <React.Fragment>
            <Container fluid>
                <div className="videoContainer">
                    <video autoPlay muted loop className="videoBg">
                        <source src="./img/video.mp4" type="video/mp4" />
                    </video>
                    <div className="headlineContainer">
                        <h1 className="videoHeadline headlineLarge">
                            COFFEE ALL THE WAY TO FREE FAVORITES
                        </h1>
                        <h4 className="videoHeadline">
                            Join Starbucks® Rewards for delicious deals &
                            exclusive offers.
                        </h4>
                        <a className="removeLinkStyle" href="/">
                            <h4 className="videoLink">Learn more</h4>
                        </a>
                    </div>
                </div>
                <Row className="alert alert-success text-center p-5 guideLine">
                    <Col md="12">
                        <Row>
                            <Col></Col>
                            <Col md="6">
                                <h5>
                                    Following CDC guidance, facial coverings are
                                    recommended in our stores for all customers,
                                    and are required where mandated by local
                                    law. Learn more
                                </h5>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="1"></Col>
                    <Col md="10">
                        <Row>
                            <Col
                                md="6"
                                className="elContainer bg-success text-light text-center px-5 py-5">
                                <h4 className="mt-5 pt-5">
                                    Your qualifying purchases have been earning
                                    you plays. Play the Summer Game for a chance
                                    to win cool prizes.*
                                </h4>
                                <Button
                                    variant="outline-light"
                                    className="outline-dark mt-4">
                                    Play now
                                </Button>
                            </Col>
                            <Col md="6" className="elContainer">
                                <Image
                                    fluid
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72796.jpg"
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6" className="elContainer">
                                <Image
                                    fluid
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72970.jpg"
                                />
                            </Col>
                            <Col
                                md="6"
                                className="elContainer bg-light text-dark text-center px-5 py-5">
                                <h1 className="mt-5 pt-5">
                                    STARBUCKS
                                    <br />
                                    REFRESHERS®
                                    <br />
                                    BEVERAGES
                                </h1>
                                <h6>
                                    Quench your summer thirst with vibrant Mango
                                    Dragonfruit, Strawberry Açaí and Kiwi
                                    Starfruit Starbucks Refreshers® beverages.
                                </h6>
                                <Button
                                    variant="outline-dark"
                                    className="outline-dark mt-4">
                                    Over Iced Beverages
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col
                                md="6"
                                className="elContainer bg-light text-dark text-center">
                                <Image
                                    fluid
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73001.jpg"
                                />
                                <h2 className="mt-5">
                                    Order and pick up. Easy as that.
                                </h2>
                                <h6>
                                    Our Frappuccino® drinks were made for summer
                                    fun. Treat yourself to Mocha Cookie Crumble
                                    or Caramel Ribbon Crunch.
                                </h6>
                                <Button
                                    variant="outline-dark"
                                    className="outline-dark my-5">
                                    Order Frapuccino drink
                                </Button>
                            </Col>

                            <Col
                                md="6"
                                className="elContainer bg-light text-dark text-center">
                                <Image
                                    fluid
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73002.jpg"
                                />
                                <h2 className="mt-5">
                                    Floating into summer like…
                                </h2>
                                <h6>
                                    Our Frappuccino® drinks were made for summer
                                    fun. Treat yourself to Mocha Cookie Crumble
                                    or Caramel Ribbon Crunch.
                                </h6>
                                <Button
                                    variant="outline-dark"
                                    className="outline-dark my-5">
                                    Order Frapuccino drink
                                </Button>
                            </Col>
                        </Row>

                        <Row className="my-5">
                            <Col
                                md="6"
                                className="elContainer bg-light text-dark text-center px-5 py-5">
                                <h2 className="mt-5 pt-5">
                                    50 years of serving communities
                                </h2>
                                <h6>
                                    From the beginning, Starbucks has been about
                                    more than just coffee. See how our partners
                                    (employees) and customers strengthen our
                                    local communities.{" "}
                                </h6>
                                <Button
                                    variant="outline-dark"
                                    className="outline-dark mt-4">
                                    Learn more
                                </Button>
                            </Col>
                            <Col md="6" className="elContainer">
                                <Image
                                    fluid
                                    src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72972.jpg"
                                />
                            </Col>
                        </Row>

                        <Row className="my-5 text-center">
                            <p className="my-4">
                                *NO PURCHASE NECESSARY. Participating stores
                                only. Ends 8/22/21. To play and for Official
                                Rules, visit starbuckssummergame.com.
                            </p>
                            <p className="my-4">
                                **Menu limited. Restricted delivery area.
                                Available in participating locations only. Fees
                                subject to change. Prices for Starbucks® items
                                purchased through Uber Eats may be higher than
                                posted in stores or as marked. See the Uber Eats
                                app for details.
                            </p>
                        </Row>
                        <hr />
                    </Col>
                    <Col md="1"></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default HomeComponent
