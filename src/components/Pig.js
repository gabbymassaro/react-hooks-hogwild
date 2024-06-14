import React from "react";

function Pig({ name, image }) {
  return (
    <div className="pigTile">
      <div className="pigTile h3">{name}</div>
      <img src={image} className="minPigTile"></img>
    </div>
  )
}

export default Pig