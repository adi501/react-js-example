import React, { Component } from "react";
import styles from "./CSSScopeCSS1.module.css";

class CSSScopeCSS1 extends Component {
  render() {
    return (
      <div>
        scope CSS in React using CSS modules Component 1
        <p className={styles.mycss}>Example Text</p>
      </div>
    );
  }
}
export default CSSScopeCSS1;
