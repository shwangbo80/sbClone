import {useState} from "react"
import {Container, Row, Col, Image, Modal, Button} from "react-bootstrap"
import {ArrowRight, Cup, CupFill, GeoAlt} from "react-bootstrap-icons"

export default function AmericanoComponent() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <div>
                <div>
                    <a href="/menu/" className="removeLinkStyle text-dark">
                        <p className="d-inline me-2">Menu</p>
                    </a>
                    <a href="/menu  /" className="removeLinkStyle text-dark">
                        <p className="d-inline me-2">/ Hot coffee</p>
                    </a>{" "}
                    <p className="d-inline text-dark">/ Americano</p>
                    <Container fluid>
                        <Row>
                            <Col md={6}>
                                <div className="text-center">
                                    <Image
                                        fluid
                                        className="drink-img"
                                        src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"></Image>
                                </div>
                            </Col>
                            <Col md={6}>
                                <h1>Caffe Americano</h1>
                                <p>15 Calories</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5}>
                                <h2>Size Options</h2>
                                <hr className="me-5"></hr>
                                <Row className="text-center">
                                    <Col className="align-self-end">
                                        <CupFill size={24} />
                                        <h5>Short</h5>
                                        <p>8 fl oz</p>
                                    </Col>
                                    <Col className="align-self-end">
                                        <Cup size={30} />
                                        <h5>Tall</h5>
                                        <p>12 fl oz</p>
                                    </Col>
                                    <Col className="align-self-end">
                                        <Cup size={36} />
                                        <h5>Grande</h5>
                                        <p>16 fl oz</p>
                                    </Col>
                                    <Col className="align-self-end">
                                        <Cup size={42} />
                                        <h5>Venti</h5>
                                        <p>20 fl oz</p>
                                    </Col>
                                </Row>
                                <GeoAlt size={24} className="d-inline me-3" />
                                <p className="d-inline">
                                    Select a store to view availability
                                </p>
                            </Col>
                            <Col md={1} />
                            <Col md={6} className="">
                                <h2>Customizations</h2>
                                <hr className="me-5"></hr>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Add-ins
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Flavors
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Toppings
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Tea
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Sweetners
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Espressp & Shot Options
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                                <div
                                    className="customizationContainer d-flex mb-3"
                                    onClick={handleShow}>
                                    <h3 className="me-auto align-self-center">
                                        Cip Options
                                    </h3>
                                    <h3 className="d-inline align-self-center pt-2">
                                        Edit
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
