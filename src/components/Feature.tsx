import React, { useState } from "react";
import data from "../data/Data";
import "./Feature.css";

const Feature = () => {
  const [picture, setPicture] = useState("");

  const handleClick = () => {
    const index = Math.floor(Math.random() * data.length);
    let imgSrc = data[index].image;

    if (imgSrc !== "") {
      setPicture(imgSrc);
    } else {
      handleClick();
    }
  };

  return (
    <div className="feature">
      <h1>Which Penny Are You ?</h1>
      <div>
        {picture !== "" ? (
          <img src={picture} alt="Penny Picture" />
        ) : (
          <button onClick={handleClick}>Let's See !</button>
        )}
      </div>
    </div>
  );
};

export default Feature;
