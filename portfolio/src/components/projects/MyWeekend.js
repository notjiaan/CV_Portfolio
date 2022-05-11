import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import WeekendOne from "../../assets/images/weekend/weekend1.png"
import WeekendTwo from "../../assets/images/weekend/weekend2.png"
import WeekendThree from "../../assets/images/weekend/weekend3.png"

const MyWeekend = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const images = [
      {
        src: WeekendOne,
        alt: "Project One",
        key: 41
      },
      {
        src: WeekendTwo,
        alt: "Project Two",
        key: 42
      },
      {
        src: WeekendThree,
        alt: "Project Three",
        key: 43
      }
    ];
    return (
      <>
        <ProjectsComp
          projectTitle="BEST Escolario "
          body={
            <Carousel
              className="pb-3"
              variant="dark"
              interval={null}
              indicators={true}
            >
              {images.map((imgs) => (
                <Carousel.Item  key={imgs.key}>
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
          title="My Weekend"
          description="A project that showcases the story about what happened during our weekend and also aims to practice our 
          skills in front end development and design with the use of ReactJS, CSS, Boostrap, and HTML"
          year="Year: 2022"
          role="Role: Web Frontend Developer"
          type="Type: Web Development (UI and Design)"
          technologies="Technologies: ReactJS, CSS, Boostrap, and HTML"
        />
      </>
    );
  };

export default MyWeekend