import React from "react";

function Pig({ name, image,  specialty, greased, weigth, highestMedalAchieved}) {

  function onTileClick() {
    console.log()
  }

  return (
    <div className="pigTile" onClick={() => onTileClick()}>
      <div className="pigTile h3">{name}</div>
      <img src={image} className="minPigTile"></img>
    </div>
  )
}

export default Pig