import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import EscolarioOne from "../../assets/images/escolario/escolario1.png";
import EscolarioTwo from "../../assets/images/escolario/escolario2.png";
import EscolarioThree from "../../assets/images/escolario/escolario3.png";
import EscolarioFour from "../../assets/images/escolario/escolario4.png";
import EscolarioFive from "../../assets/images/escolario/escolario5.png";
import EscolarioSix from "../../assets/images/escolario/escolario6.png";
import EscolarioSeven from "../../assets/images/escolario/escolario7.png";
import EscolarioEight from "../../assets/images/escolario/escolario8.png";
import EscolarioNine from "../../assets/images/escolario/escolario9.png";
import EscolarioTen from "../../assets/images/escolario/escolario10.png";

const Escolario = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const images = [
    {
      src: EscolarioOne,
      alt: "Project One",
      key: 1
    },
    {
      src: EscolarioTwo,
      alt: "Project Two",
      key: 2
    },
    {
      src: EscolarioThree,
      alt: "Project Three",
      key: 3
    },
    {
      src: EscolarioFour,
      alt: "Project Four",
      key: 4
    },
    {
      src: EscolarioFive,
      alt: "Project Five",
      key: 5
    },
    {
      src: EscolarioSix,
      alt: "Project Six",
      key: 6
    },
    {
      src: EscolarioSeven,
      alt: "Project Seven",
      key: 7
    },
    {
      src: EscolarioEight,
      alt: "Project Eight",
      key: 8
    },
    {
      src: EscolarioNine,
      alt: "Project Nine",
      key: 9
      
    },
    {
      src: EscolarioTen,
      alt: "Project Ten",
      key: 10
    },
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
        title="Escolario"
        description="Developed a blog web application with CRUD functionalities for the
        content of the website using React for Frontend, Express and Node.js
        for backend, and MongoDB for Database.The system provides a platform
        in which the organization and scholars have a designated outlet for
        communication and university-related news. The system will be able
        to accept user details, comments, and posts. "
        year="Year: 2020 - 2021"
        role="Role: Project Developer"
        type="Type: Web Development (Blog Website)"
        technologies="Technologies: MongoDB, ExpressJS, ReactJS, NodeJS"
      />
    </>
  );
};

export default Escolario;
