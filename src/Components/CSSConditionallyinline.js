import React, { Component } from "react";

class CSSConditionally extends Component {
  constructor() {
    super();
    this.state = { isRed: true };
  }

  render() {
    const isRed = this.state.isRed;

    return (
      <div>
        Conditionally applying inline styles
        <p style={{ color: isRed ? "red" : "blue" }}>Example Text</p>
      </div>
    );
  }
}
export default CSSConditionally;
