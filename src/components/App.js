import React, { useState } from "react";
import Nav from "./Nav";
import PigTiles from './PigTiles'

import hogs from "../porkers_data";

function App() {
  const [hogData, setHogData] = useState(hogs)

	return (
		<div className="App">
			<Nav />
      <PigTiles
        hogData={hogData}
        setHogData={setHogData}
      />
		</div>
	);
}

export default App;
