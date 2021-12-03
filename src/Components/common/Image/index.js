import React from "react";
import "./style.css";

const Image = ({ id, source, altText, className }) => {
  return <img id={id} src={source} alt={altText} className={className} />;
};
export default Image;
