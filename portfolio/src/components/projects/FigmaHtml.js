import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import FigmaOne from "../../assets/images/figma/figma1.png"
import FigmaTwo from "../../assets/images/figma/figma2.png"
import FigmaThree from "../../assets/images/figma/figma3.png"
import FigmaFour from "../../assets/images/figma/figma4.png"
import FigmaFive from "../../assets/images/figma/figma5.png"
import FigmaSix from "../../assets/images/figma/figma6.png"

const FigmaHtml = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const images = [
    {
      src: FigmaOne,
      alt: "Project One",
      key: 21
    },
    {
      src: FigmaTwo,
      alt: "Project Two",
      key: 22
    },
    {
      src: FigmaThree,
      alt: "Project Three",
      key: 23
    },
    {
      src: FigmaFour,
      alt: "Project Four",
      key: 24
    },
    {
      src: FigmaFive,
      alt: "Project Five",
      key: 25
    },
    {
      src: FigmaSix,
      alt: "Project Six",
      key: 26
    },
  ];
  return (
    <>
      <ProjectsComp
        projectTitle="Figma Design to Html"
        body={
          <Carousel
            className="pb-3"
            interval={null}
            indicators={true}
          >
            {images.map((imgs) => (
              <Carousel.Item key={imgs.key}>
                <img
                  className="d-block project-img"
                  src={imgs.src}
                  alt={imgs.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        }
        click={() => setShow(true)}
      />
      <ProjectModal
        show={show}
        modalVisible={handleShow}
        title="Project B"
        description="A project that aims to showcase our abilities in replicating the figma design into an html static website. 
        It also tests our abilities to make the website responsive "
        year="Year: 2022"
        role="Role: Web Frontend Developer"
        type="Type: Web Development (Design)"
        technologies="Technologies: Html, CSS, Boostrap"
      />
    </>
  );
};

export default FigmaHtml;
