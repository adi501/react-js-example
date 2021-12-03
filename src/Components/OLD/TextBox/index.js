import React from "react";
import "./TextBox.css";

function TextBox(props) {
  const className = `TextBox ${props.type}`;
  return <input className={className} onChange={props.handleClick} />;
}

TextBox.defaultProps = {
  type: "secondary"
};

export default TextBox;
