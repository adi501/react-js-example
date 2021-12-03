import React from "react";
import TextBox from "../TextBox/index";

function EXP() {
  function handleTextBoxChange(e) {
    console.log("Text box changed Event");
  }
  return (
    <div>
      <TextBox handleClick={handleTextBoxChange} />
      <TextBox handleClick={handleTextBoxChange} />
      <TextBox handleClick={handleTextBoxChange} />
    </div>
  );
}
export default EXP;
