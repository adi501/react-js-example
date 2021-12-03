import React, { Component } from "react";

class PageTitleEXP1 extends Component {
  componentDidMount() {
    document.title = "Allinoneweb";
  }
  render() {
    return (
      <div>
        <h3>Page Title Example</h3>
      </div>
    );
  }
}
export default PageTitleEXP1;
