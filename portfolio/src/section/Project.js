import React, { useState } from "react";
import "../css/sec-style/projects-style.css";
import Escolario from "../components/projects/Escolario";
import FurCare from "../components/projects/FurCare";
import FigmaHTML from "../components/projects/FigmaHtml";
import NodeBlog from "../components/projects/NodeBlog";
import GreenFoot from "../components/projects/GreenFoot";
import DefButton from "../components/DefButton";
import { Container, Button } from "react-bootstrap";

const Project = () => {
  const [show, setShow] = useState(false);

  const showToggler = () => {
    setShow(!show);
  };
  return (
    <div className="pt-5 pb-5 projects-container" id="project">
      <Container
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h2 className="pb-5 project-header">
          My<span> Projects. </span>
        </h2>
        <Escolario />
        <FurCare />
        <div className=" showToggler mt-3 d-flex justify-content-center">
          <Button
            className={show ? "hide" : "mt-3 mb-5 button"}
            onClick={showToggler}
          >
            See More
          </Button>
        </div>
        {show ? (
          <>
            <FigmaHTML />
            <NodeBlog />
            <GreenFoot />
            <div className="showToggler mt-3 d-flex justify-content-center">
              <Button className="button" onClick={showToggler}>
                See Less
              </Button>
            </div>
          </>
        ) : null}
      </Container>
    </div>
  );
};

export default Project;
