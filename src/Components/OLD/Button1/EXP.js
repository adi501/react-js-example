import React from "react";
import Button from "../Button/index";

function EXP() {
  function handleAPICall(e) {
    console.log("Submit Button Clicked");
  }
  function handleFormReset(e) {
    console.log("Reset or Click Button Clicked");
  }
  return (
    <div>
      <Button
        handleClick={handleAPICall}
        label="Submit"
        icon={<i className="fas fa-arrow-alt-circle-right" />}
        type="primary"
      />
      <Button handleClick={handleFormReset} label="Reset" type="secondary" />
      <Button handleClick={handleFormReset} label="Click" />
      <br />
      <br />
      <br />
      Ref: https://buttercms.com/blog/building-reusable-components-using-react
    </div>
  );
}
export default EXP;
