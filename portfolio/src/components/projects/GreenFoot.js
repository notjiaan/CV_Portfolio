import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import GreenFootOne from "../../assets/images/greenfoot/greenfoot1.png"
import GreenFootTwo from "../../assets/images/greenfoot/greenfoot2.png"
import GreenFootThree from "../../assets/images/greenfoot/greenfoot3.png"
import GreenFootFour from "../../assets/images/greenfoot/greenfoot4.png"
import GreenFootFive from "../../assets/images/greenfoot/greenfoot5.png"

const GreenFoot = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const images = [
    {
      src: GreenFootOne,
      alt: "Project One",
      key: 31
    },
    {
      src: GreenFootTwo,
      alt: "Project Two",
      key: 32
    },
    {
      src: GreenFootThree,
      alt: "Project Three",
      key: 33
    },
    {
      src: GreenFootFour,
      alt: "Project Four",
      key: 34
    },
    {
      src: GreenFootFive,
      alt: "Project Five",
      key: 35
    },
  ];
  return (
    <>
      <ProjectsComp
        projectTitle="Greenfoot Game"
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
        title="Fighting Kimmy"
        description="Fighting Kimmy is a game developed using Greenfoot API (Java). The project consists of actors, colors, fonts, images, sounds, world, mouseinfo, and 
        userinfo. The projects inspiration is from Kimmy, a mobile legends character. 
        The game is similar to space invaders "
        year="Year: 2019"
        role="Role: Developer"
        type="Type: OOP Game Development"
        technologies="Technologies: Greenfoot, Java"
      />
    </>
  );
};

export default GreenFoot;
