import React from 'react';
import { Modal } from "react-bootstrap";
import "../css/comp-style/comp-style.css";


const ProjectModal = (props) => {
  return (
    <Modal size="xl" show={props.show} onHide={props.modalVisible} className="project-modal">
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.description}
            <br />
          </p>
          <p>{props.year}</p>
          <p> {props.role}</p>
          <p> {props.type}</p>
          <p>{props.technologies}</p>
          <hr />
        </Modal.Body>
      </Modal>
  )
}

export default ProjectModal