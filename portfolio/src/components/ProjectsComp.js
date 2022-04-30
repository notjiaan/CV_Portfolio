import React from "react";
import { Card, Container, Button } from "react-bootstrap";


const ProjectsComp = (props) => {
  return (
    <Container className="pb-5 pt-5 text-center">
      <Card className="project-card">
        <Card.Header className="pt-4 card-header">{props.projectTitle}</Card.Header>
        <Card.Body>
          {props.body}
          <Button onClick={props.click} className="button">Details</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectsComp;
