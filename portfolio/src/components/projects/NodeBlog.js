import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import NodeOne from "../../assets/images/nodeAssignment/node1.png"
import NodeTwo from "../../assets/images/nodeAssignment/node1.png"
import NodeThree from "../../assets/images/nodeAssignment/node1.png"
import NodeFour from "../../assets/images/nodeAssignment/node1.png"


const NodeBlog = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const images = [
    {
      src: NodeOne,
      alt: "Project One",
      key: 41
    },
    {
      src: NodeTwo,
      alt: "Project Two",
      key: 42
    },
    {
      src: NodeThree,
      alt: "Project Three",
      key: 43
    },
    {
      src: NodeFour,
      alt: "Project Four",
      key: 44
    }
  ];
  return (
    <>
    <ProjectsComp
      projectTitle="Blog Website"
      body={
        <Carousel
          className="pb-3"
          variant="dark"
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
      title="Blog website"
      description="A web application that utilizes NodeJS, EJS, and MongoDB. The app has the CRUD functionalities that are tied to the database. The project aims to 
      develop our backend skills in web development "
      year="Year: 2022"
      role="Role: Web Frontend Developer"
      type="Type: Web Development (Design and Backend)"
      technologies="Technologies: Html, CSS, Boostrap, NodeJS, Express, EJS, Mongoose, MongoDB"
    />
  </>
  )
}

export default NodeBlog