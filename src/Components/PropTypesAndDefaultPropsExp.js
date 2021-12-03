import React, { Component } from "react";
import PropTypes from "prop-types";
class PropTypesAndDefaultPropsExp extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.prop1}</h1>
        <h1>{this.props.prop2 ? "true" : "false"}</h1>
        <h1>{this.props.prop3(3)}</h1>
        <h1>{this.props.prop4}</h1>
        <h1>{this.props.prop5}</h1>
        <h1>{this.props.prop6.name}</h1>
        <h1>{this.props.prop6.age}</h1>
      </div>
    );
  }
}
PropTypesAndDefaultPropsExp.propTypes = {
  prop1: PropTypes.array.isRequired,
  prop2: PropTypes.bool.isRequired,
  prop3: PropTypes.func,
  prop4: PropTypes.number,
  prop5: PropTypes.string,
  prop6: PropTypes.object
};
PropTypesAndDefaultPropsExp.defaultProps = {
  prop1: [1, 2, 3],
  prop2: true,
  prop3: function(e) {
    return e * 3;
  },
  prop4: 1,
  prop5: "allinone",
  prop6: { name: "adi", age: 30 }
};
export default PropTypesAndDefaultPropsExp;
