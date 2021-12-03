import React, { Component } from "react";

class PropsDefaultEXP1 extends Component {
  render() {
    return (
      <div>
        Default Pops In Class EXP1
        <p>{this.props.Name}</p>
        <p>{this.props.Id}</p>
      </div>
    );
  }
}

PropsDefaultEXP1.defaultProps = {
  Name: "Adi",
  Id: 101
};
export default PropsDefaultEXP1;
