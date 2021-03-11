import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.url} alt={props.imagedef} />
      <p>{props.ph}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
