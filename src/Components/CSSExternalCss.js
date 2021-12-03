import React, { Component } from "react";
import "./CSSExternalCss.css";

class CSSExternalCss extends Component {
  render() {
    return (
      <div>
        CSS external Styling<br />
        Styling React components with CSS stylesheets
        <div className="mycss">Style!</div>
        <h5>Style!</h5>
      </div>
    );
  }
}
export default CSSExternalCss;
