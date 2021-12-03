import React from "react";

function TernaryOperatorEXP2(props) {
    const status=1
  return (
    <div>
      <div>
        <h1>Ternary operator example in react js</h1>
      </div>
      <button> {status === 1 ? "Active" : "DeActive"} </button>
    </div>
  );
}
export default TernaryOperatorEXP2;