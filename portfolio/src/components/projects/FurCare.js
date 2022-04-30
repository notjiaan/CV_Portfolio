import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./projects.css";
import ProjectsComp from "../ProjectsComp";
import ProjectModal from "../ProjectModal";
import FurCareOne from "../../assets/images/furcare/furcare1.png"
import FurCareTwo from "../../assets/images/furcare/furcare2.png"
import FurCareThree from "../../assets/images/furcare/furcare3.png"
import FurCareFour from "../../assets/images/furcare/furcare4.png"
import FurCareFive from "../../assets/images/furcare/furcare5.png"
import FurCareSix from "../../assets/images/furcare/furcare6.png"
import FurCareSeven from "../../assets/images/furcare/furcare7.png"
import FurCareEight from "../../assets/images/furcare/furcare8.png"
import FurCareNine from "../../assets/images/furcare/furcare9.png"
import FurCareTen from "../../assets/images/furcare/furcare10.png"

const FurCare = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const images = [
    {
      src: FurCareOne,
      alt: "Project One",
      key: 11
    },
    {
      src: FurCareTwo,
      alt: "Project Two",
      key: 12
    },
    {
      src: FurCareThree,
      alt: "Project Three",
      key: 13
    },
    {
      src: FurCareFour,
      alt: "Project Four",
      key: 14
    },
    {
      src: FurCareFive,
      alt: "Project Five",
      key: 15
    },
    {
      src: FurCareSix,
      alt: "Project Six",
      key: 16
    },
    {
      src: FurCareSeven,
      alt: "Project Seven",
      key: 17

    },
    {
      src: FurCareEight,
      alt: "Project Eight",
      key: 18

    },
    {
      src: FurCareNine,
      alt: "Project Nine",
      key: 19
    },
    {
      src: FurCareTen,
      alt: "Project Ten",
      key: 20
    },
    
  ];
  return (
    <>
      <ProjectsComp
        projectTitle="FurCare"
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
        title="FurCare"
        description="Developed a mobile application for Stray Love PH to help them in their advocacy to rescue and adopt strays in need. 
        The application allows user to submit a report of stray in need where they can upload an image and the current location with 99.99% location accuracy 
        using Expo modules. The location submitted by the user can be viewed using Google Maps API integrated on the mobile app. 
        This application was developed using Firebase for backend and React Native and Expo for Frontend."
        year="Year: 2021"
        role="Role: Project Developer / Quality Assurance"
        type="Type: Mobile Development"
        technologies="Technologies: React Native, Firebase"
      />
    </>
  );
};

export default FurCare;
