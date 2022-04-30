import React from "react";
import "../css/sec-style/skills-style.css";
import CardSkills from "../components/CardSkills";
import { Row, Col, Container } from "react-bootstrap";
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import BOOTSTRAP from "../assets/images/bootstrap.png";
import JS from "../assets/images/js.png";
import NODEJS from "../assets/images/nodejs.png";
import REACT from "../assets/images/react.png";
import PYTHON from "../assets/images/python.png";
import JAVA from "../assets/images/java.png";

const Skills = () => {
  return (
    <div className="container-fluid py-5 skills-container" id="skills">
      <Container
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="header-container pt-3"
      >
        <h2 className="pb-5">
          Technical <span> Skills. </span>
        </h2>
        <Row className="py-3">
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={HTML} title="HTML" alt="HTML" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={CSS} title="CSS" alt="CSS" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={BOOTSTRAP} title="BOOTSTRAP" alt="BOOTSTRAP" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={JS} title="JAVASCRIPT" alt="JS" />
          </Col>
        </Row>
        <Row className="pb-5">
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={NODEJS} title="NODEJS" alt="NODEJS" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={REACT} title="REACT" alt="REACT" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={PYTHON} title="PYTHON" alt="PYTHON" />
          </Col>
          <Col sm={12} md={6} lg className="d-flex justify-content-center pb-3">
            <CardSkills img={JAVA} title="JAVA" alt="JAVA" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
