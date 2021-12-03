import React, { useState } from "react";

const IfElseEXP1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <h3>if else Example </h3>
      <IfElseEXP2 isLoggedIn={isLoggedIn} />
    </div>
  );
};
const IfElseEXP2 = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Welcome User </div>;
  } else {
    return <div>You need to login</div>;
  }
};

export default IfElseEXP1;
