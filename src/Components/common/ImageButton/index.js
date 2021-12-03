import React from "react";
import "./style.css";

const ImageButton = ({ id, source, altText, className, clickHandler }) => {
  return (
    <>
      <span onClick={clickHandler} role="button">
        <img id={id} src={source} alt={altText} className={className} />
      </span>
    </>
  );
};
export default ImageButton;
