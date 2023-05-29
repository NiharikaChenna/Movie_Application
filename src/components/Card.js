import React from "react";

const Card =(props) =>{
  return (
    <div>
      <img src={props.image} className="img-thumbnail" alt="..."></img>
    </div>
  );
}

export default Card;
