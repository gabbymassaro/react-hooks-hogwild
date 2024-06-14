import React, { useState } from "react";
import Nav from "./Nav";
import Form from './Form';
import PigTiles from './PigTiles';

import hogs from "../porkers_data";

function App() {
  const [hogData, setHogData] = useState(hogs)

  function handleFilterChange() {
    if (hogData === hogs) {
      const greasy = hogData.filter((hog) => hog.greased === true)
      setHogData(greasy)
    } else {
      setHogData(hogs)
    }
  }

  function handleSortingNames() {
    if (hogData === hogs) {
      const sortedNames = hogData.toSorted((a, b) => a.name.localeCompare(b.name))
      setHogData(sortedNames)
    } else {
      setHogData(hogs)
    }
  }

  function handleSortingWeight() {
    if (hogData === hogs) {
      const sortedWeights = hogData.toSorted((a, b) => a.weight - b.weight)
      setHogData(sortedWeights)
    } else {
      setHogData(hogs)
    }
  }

	return (
		<div className="App">
			<Nav />
      <Form />
      <div>
        <button className="normalText" onClick={handleFilterChange}>Greasy?</button>
        <button className="normalText" onClick={handleSortingNames}>Sort By Name</button>
        <button className="normalText" onClick={handleSortingWeight}>Sort By Weight</button>
      </div>
      <PigTiles
        hogData={hogData}
        setHogData={setHogData}
      />
		</div>
	);
}

export default App;
