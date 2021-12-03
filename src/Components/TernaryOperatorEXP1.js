import React, { useState } from "react";

const TernaryOperatorEXP1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h3>Ternary Operator Example </h3>
      {isLoggedIn ? <div> Welcome User</div> : <div> You need to login</div>}
    </div>
  );
};

export default TernaryOperatorEXP1;
