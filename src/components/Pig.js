import React, { useState } from "react";

function Pig({ name, image,  specialty, greased, weight, highestMedalAchieved }) {
  const [isDetails, setIsDetails] = useState(false)

  function onTileClick() {
    setIsDetails((isDetails) => !isDetails)
  }

  return (
  <div className="pigTile">
    <div onClick={() => onTileClick()}>
      <div className="smallHeader">{name}</div>
      <img src={image} className="minPigTile"></img>
      {isDetails ?
        <ul>Details:
          <li>Specialty: {specialty}</li>
          <li>Greased: {greased}</li>
          <li>Weight: {weight} lbs</li>
          <li>Higest Medal: {highestMedalAchieved}</li>
        </ul> : ""}
    </div>
  </div>
  )
}

export default Pig