import React, { useState } from "react";

function Pig({ name, image,  specialty, greased, weigth, highestMedalAchieved }) {

  const [isDetails, setIsDetails] = useState(false)

  function onTileClick() {
    // console.log(
    //   `Pig Details: Specialty = ${specialty},
    //   Greased = ${greased},
    //   Weight = ${weigth},
    //   HighestMedalAcheived = ${highestMedalAchieved}
    // `)
    setIsDetails((isDetails) => !isDetails)
  }

  console.log(`Name: ${name}, isDetails: ${isDetails}`)

  return (
    <div className="pigTile" onClick={() => onTileClick()}>
      <div className="pigTile h3">{name}</div>
      <img src={image} className="minPigTile"></img>
    </div>
  )
}

export default Pig