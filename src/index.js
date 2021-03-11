import React from "react";
import ReactDOM from "react-dom";
import Card from "./App";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      url="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      imagedef="avatar_img"
      ph="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      url="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      imagedef="avatar_img"
      ph="+987 654 321"
      email="jack@nowhere.com"
    />
  </div>,
  document.getElementById("root")
);
