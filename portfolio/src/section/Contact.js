import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../css/sec-style/contact-style.css";
import DefButton from "../components/DefButton";
import {
  Row,
  Col,
  Container,
  Form,
  Card,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import { LocalPhone, Email, MyLocation } from "@mui/icons-material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        form.current,
        "V95GEQtl35xDInT4v"
      )
      .then(
        (result) => {
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="pt-5 pb-5 contact-container" id="contact">
      <Container
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h2 className="pb-5">
          Contact <span> Me. </span>
        </h2>
        <Row>
          <Col>
            <h1 className="connect py-5">Want To Connect ?</h1>
            <Card className="contact-details my-5">
              <Card.Body>
                <Card.Text className="icon-information">
                  <LocalPhone className="icon" />
                  <h5 className="info">+639190049077</h5>
                </Card.Text>
                <Card.Text className="icon-information">
                  <Email className="icon" />
                  <h5 className="info">jiaanpatrick.abad@gmail.com</h5>
                </Card.Text>
                <Card.Text className="icon-information">
                  <MyLocation className="icon" />
                  <h5 className="info">Balanga City, Bataan </h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h5 className="py-5">
              <strong>
                <span>What's your story?</span>
              </strong>{" "}
              Get in touch with me. Let's create the future together.
            </h5>
            <Form ref={form} onSubmit={sendEmail} className="py-5">
              <Form.Group className="mb-4" controlId="name">
                <Form.Control type="text" placeholder="Name" name="name" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="email">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email: ex (name@example.com)"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="subject">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message..."
                  name="message"
                />
              </Form.Group>
              <Button className="button" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
