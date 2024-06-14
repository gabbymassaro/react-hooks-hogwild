import React from "react";
import Pig from './Pig'

function PigTiles({ hogData }) {
  return (
    <div className="pigTile">
      {hogData.map((hog, index) => (
        <Pig
          key={index}
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased ? 'Yes' : 'No'}
          weight={hog.weight}
          image={hog.image}
          highestMedalAchieved={hog["highest medal achieved"]} />
      ))}
    </div>
  )
}

export default PigTiles