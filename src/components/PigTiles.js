import React from "react";
import Pig from './Pig'

function PigTiles({ hogs }) {

  console.log(hogs)
  return (
    <div className="pigTile">
      {hogs.map((hog, index) => (
        <Pig
          key={index}
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weigth={hog.weight}
          image={hog.image} />
      ))}
    </div>
  )
}

export default PigTiles