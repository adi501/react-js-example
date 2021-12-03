import React, { useState } from "react";

const ElementVariablesEXP1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  let message;
  if (isLoggedIn) {
    message = <div>Welcome User </div>;
  } else {
    message = <div>You need to login</div>;
  }

  return (
    <div>
      <h3>Element Variables Example </h3>
      {message}
    </div>
  );
};

export default ElementVariablesEXP1;
