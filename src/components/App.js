import React, { useState } from "react";
import Nav from "./Nav";
import PigTiles from './PigTiles'

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

	return (
		<div className="App">
			<Nav />
      <button onClick={handleFilterChange}>Greasy?</button>
      <PigTiles
        hogData={hogData}
        setHogData={setHogData}
      />
		</div>
	);
}

export default App;
