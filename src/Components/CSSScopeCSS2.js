import React, { Component } from "react";
import styles2 from "./CSSScopeCSS2.module.css";

class CSSScopeCSS2 extends Component {
  render() {
    return (
      <div>
        scope CSS in React using CSS modules Component 2
        <p className={styles2.mycss}>Example Text</p>
      </div>
    );
  }
}
export default CSSScopeCSS2;
