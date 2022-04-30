import React from "react";
import { Button } from "react-bootstrap";
const DefButton = (props) => {
  return <Button className="button " onClick={props.click}>{props.buttonName}</Button>;
};

export default DefButton;
