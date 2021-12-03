import React from "react";
import ImageButton from "./common/ImageButton/index";

export default function ImageButtonEXP() {
  const clickHandler = e => {
    alert("Clicked on Image Button");
  };
  return (
    <>
      <ImageButton
        id={"img1"}
        altText={"my inage"}
        className={"img"}
        clickHandler={clickHandler}
        source={"http://allinoneweb.net/Including/Images/home/logo.png"}
      />
    </>
  );
}
