import React from "react";
import { Card } from "react-bootstrap";

const CardSkills = (props) => {
  return (
    <Card className="text-center py-4 px-3 m-1 card-container ">
      <Card.Img
        className="card-img"
        variant="top"
        src={props.img}
        alt={props.alt}
      />

      <Card.Title className="prog-title">{props.title}</Card.Title>
    </Card>
  );
};

export default CardSkills;
