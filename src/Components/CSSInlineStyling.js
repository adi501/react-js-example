import React, { Component } from "react";

class CSSInlineStyling extends Component {
  render() {
    return (
      <div>
        CSS Inline Styling
        <h1 style={{ color: "red", fontSize: "15px", textAlign: "center" }}>
          Style!
        </h1>
        <h1 style={{ backgroundColor: "lightblue" }}>Style!</h1>
      </div>
    );
  }
}
export default CSSInlineStyling;
