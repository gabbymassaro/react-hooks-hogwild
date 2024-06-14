import React, { useState } from "react";

function Pig({ name, image,  specialty, greased, weight, highestMedalAchieved }) {
  const [isDetails, setIsDetails] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  function onTileClick() {
    setIsDetails((isDetails) => !isDetails)
  }

  function onCheckBox() {
    setIsChecked((isChecked) => !isChecked)
  }

  return (
  <div className="pigTile">
    <input type="checkbox" value="hide" onChange={onCheckBox}></input>
    <label>Hide</label>
    <div onClick={onTileClick}>
      <div className="smallHeader">{name}</div>
      {isChecked ? "" : <img src={image} className="minPigTile" alt="pig"></img>}
      {isDetails ?
        <ul>Details:
          <li>Specialty: {specialty}</li>
          <li>Greased: {greased}</li>
          <li>Weight: {weight} lbs</li>
          <li>Highest Medal: {highestMedalAchieved}</li>
        </ul> : ""}
    </div>
  </div>
  )
}

export default Pig