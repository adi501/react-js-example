import React from "react";
import Label from "./common/Label/index";

const LabelEXP = () => {
  return (
    <>
      <h3>Label reusable component example</h3>
      <Label id={"lblName"} value={"Name"} />
      <br />
      <Label id={"lblEmail"} value={"Email"} />
    </>
  );
};
export default LabelEXP;
