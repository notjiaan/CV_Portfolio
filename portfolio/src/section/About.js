import React from "react";
import "../css/sec-style/about-style.css";
import CV from "../assets/files/Abad-JiaanPatrick-CV .pdf";
import MyPhoto from "../assets/images/my_photo.png";
import DefButton from "../components/DefButton";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="pt-5 about-container" id="about">
        <Container
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div className="motto-container text-center px-5">
            <h4 className="py-3">
              " Stop chasing the money and start chasing the passion. "
            </h4>
            <p>- Tony Hsieh</p>
            <p>
              Money is essential but whats more important is that you are
              earning the money through things that you are passionate about.
            </p>
          </div>
          <Container className="text-center">
            <Row>
              <Col sm={12} lg className="about-me-info-container my-auto">
                <h2 className="py-3">
                  About <span>Me.</span>
                </h2>
                <p className="about-me-paragraph">
                  I am experienced working in teams and being in projects namely
                  Software Engineering and Capstone that involved creating web
                  and mobile applications. Looking to improve and cultivate my
                  skills in web and app development and in software quality
                  assurance.
                </p>
                <Button
                  className="button"
                  href={CV}
                  download="Abad-JiaanPatrick-CV.pdf"
                  target="_blank"
                >
                  Get CV
                </Button>
              </Col>
              <Col sm={12} lg>
                <div className="my-photo-container"></div>
                <img src={MyPhoto} alt="My Photo" className="my-photo" />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default About;
