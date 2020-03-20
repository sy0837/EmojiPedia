import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" >
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd className="meaning">{props.mean}</dd>
    </div>
  );
}
export default Card;
