import React from "react";
import Image from "./common/Image/index";

const IMAGES = [
  "http://allinoneweb.net/Including/Images/home/logo.png",
  "http://allinoneweb.net/Including/Images/home/logo.png",
  "http://allinoneweb.net/Including/Images/home/logo.png",
  "http://allinoneweb.net/Including/Images/home/logo.png",
  "http://allinoneweb.net/Including/Images/home/logo.png"
];

const ImageEXP = () => (
  <>
    {IMAGES.map(image => (
      <Image source={image} key={image} className={"img"} />
    ))}

    <Image
      id={"img1"}
      altText={"my inage"}
      className={"img"}
      source={
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      }
    />
  </>
);

export default ImageEXP;
