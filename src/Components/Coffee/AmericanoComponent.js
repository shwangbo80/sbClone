import {useState} from "react"
import {Container, Row, Col, Image, Modal, Form} from "react-bootstrap"
import {Cup, CupFill, GeoAlt} from "react-bootstrap-icons"

export default function AmericanoComponent() {
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)

  const [show4, setShow4] = useState(false)
  const handleClose4 = () => setShow4(false)
  const handleShow4 = () => setShow4(true)

  const [show5, setShow5] = useState(false)
  const handleClose5 = () => setShow5(false)
  const handleShow5 = () => setShow5(true)

  const [show6, setShow6] = useState(false)
  const handleClose6 = () => setShow6(false)
  const handleShow6 = () => setShow6(true)

  const [show7, setShow7] = useState(false)
  const handleClose7 = () => setShow7(false)
  const handleShow7 = () => setShow7(true)
  return (
    <>
      <Modal show={show1} onHide={handleClose1} scrollable={true} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add-ins</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Creamer</h6>
          <hr />
          <div className="mb-2">
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
            <Form.Select className="my-4">
              <option>Splash of Oatmilk</option>
              <option value="1">ExtraSplash of Oatmilk</option>
              <option value="2">Light Splash of Oatmilk</option>
              <option value="3">No Splash of Oatmilk</option>
              <option value="4">Splash of Oatmilk</option>
              <option value="5">Subsitute Splash of Oatmilk</option>
            </Form.Select>
          </div>
          <h6>Room</h6>
          <hr />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 4</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 5</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 6</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 7</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

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
              <p className="d-inline">Select a store to view availability</p>
            </Col>
            <Col md={1} />
            <Col md={6} className="">
              <h2>Customizations</h2>
              <hr className="me-5"></hr>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow1}>
                <h5 className="me-auto align-self-center">Add-ins</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow2}>
                <h5 className="me-auto align-self-center">Flavors</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow3}>
                <h5 className="me-auto align-self-center">Toppings</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow4}>
                <h5 className="me-auto align-self-center">Tea</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow5}>
                <h5 className="me-auto align-self-center">Sweetners</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow6}>
                <h5 className="me-auto align-self-center">
                  Espresso & Shot Options
                </h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
              <div
                className="customizationContainer d-flex mb-3"
                onClick={handleShow7}>
                <h5 className="me-auto align-self-center">Cup Options</h5>
                <h5 className="d-inline align-self-center pt-2">Edit</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
