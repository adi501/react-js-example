import React, { Component } from "react";

class CSSJavaScriptObject extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };
    return (
      <div>
        CSS with JavaScript Object
        <h1 style={mystyle}>Style!</h1>
      </div>
    );
  }
}
export default CSSJavaScriptObject;
