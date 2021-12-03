import React from "react";
import "./style.css";

const Label = props => {
  return <label id={props.id}>{props.value}</label>;
};
export default Label;
