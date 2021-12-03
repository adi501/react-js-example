import React, { Component } from "react";
import "./CSScomplexconditions.css";

class CSScomplexconditions extends Component {
  getClass(someInput) {
    switch (someInput) {
      case "1": {
        return "class1";
      }
      case "2": {
        return "class2";
      }
      case "3": {
        return "class3";
      }
    }
  }
  render() {
    return (
      <div>
        complex Conditionally applying CSS classes
        <p className={this.getClass("3")}>Example Text</p>
      </div>
    );
  }
}
export default CSScomplexconditions;
