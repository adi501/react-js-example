import React, { Component } from "react";
import "./CSSclassesConditionallyApply.css";

class CSSclassesConditionallyApply extends Component {
  constructor() {
    super();
    this.state = { isRed: true };
  }
  render() {
    const isRed = this.state.isRed;
    return (
      <div>
        Conditionally applying CSS classes
        <p className={isRed ? "class1" : "class2"}>Example Text</p>
      </div>
    );
  }
}
export default CSSclassesConditionallyApply;
