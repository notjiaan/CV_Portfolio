import React from "react";
import { Modal, Container } from "react-bootstrap";
import "../css/comp-style/comp-style.css";

const ProjectModal = (props) => {
  return (
    <Modal
      size="xl"
      show={props.show}
      onHide={props.modalVisible}
      className="project-modal"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="project-modal-title">{props.title}</Modal.Title>
      </Modal.Header>
      <Container>
        <Modal.Body>
          <p className="project-modal-desrciption">
            {props.description}
            <br />
          </p>
          <p className="project-modal-desrciption">{props.year}</p>
          <p className="project-modal-desrciption"> {props.role}</p>
          <p className="project-modal-desrciption"> {props.type}</p>
          <p className="project-modal-desrciption">{props.technologies}</p>
          <hr />
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default ProjectModal;
