import React, { useState } from "react";

const ShortCircuitOperatorEXP1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h3>Short Circuit Operator Example </h3>
      {isLoggedIn && <div> Welcome User</div>}
    </div>
  );
};

export default ShortCircuitOperatorEXP1;
