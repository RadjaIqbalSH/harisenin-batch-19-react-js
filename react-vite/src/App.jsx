import Navbar from "./components/Navbar";
import Card from "./components/Card";

import "./App.css";
import { useState } from "react";

const dataArray = ["kucing", "kodok", "Jerapa", "Gajah"];

function App() {
	const [state1, setState1] = useState(true);
	const [state2, setState2] = useState(true);
	const [state3, setState3] = useState(true);
	const [state4, setState4] = useState(true);

	return (
		<>
			<Navbar />
			<button
				style={{ width: "fit-content", margin: "12px auto" }}
				onClick={() => setState1((current) => !current)}
			>
				Hide Card 1
			</button>
			<button
				style={{ width: "fit-content", margin: "12px auto" }}
				onClick={() => setState2((current) => !current)}
			>
				Hide Card 2
			</button>
			<button
				style={{ width: "fit-content", margin: "12px auto" }}
				onClick={() => setState3((current) => !current)}
			>
				Hide Card 3
			</button>
			<button
				style={{ width: "fit-content", margin: "12px auto" }}
				onClick={() => setState4((current) => !current)}
			>
				Hide Card 4
			</button>
			<div>
				{state1 && <Card />}
				{/* {state2 && <Card />}
				{state3 && <Card />}
				{state4 && <Card />} */}
			</div>
			{/* <div>
				{dataArray.map((data) => (
					<Card name={data} />
				))}
			</div> */}
		</>
	);
}

export default App;
