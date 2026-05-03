import React, { useEffect, useState } from "react";

function Card(props) {
	const [state, setState] = useState(1);
	const [response, setResponse] = useState({});

	function handlingAdd1() {
		setState((currentState) => currentState + 1);
	}
	function handlingMin1() {
		setState((currentState) => currentState - 1);
	}

	useEffect(() => {
		console.log("Mount");

		return () => {
			console.log("Unmount");
		};
	}, [state]);

	useEffect(() => {
		fetch(`https://api.backend.com/data/product/${state}`).then(
			(response) => {
				setResponse(response);
			}
		);
	}, [state]);

	useEffect(() => {
		//
	});

	return (
		<div className="card">
			<p>Name Animal: {props.name}</p>
			<p>Count : {state}</p>
			<button
				style={{ marginTop: "12px", marginRight: "8px" }}
				onClick={handlingMin1}
			>
				MIN 1
			</button>
			<button style={{ marginTop: "12px" }} onClick={handlingAdd1}>
				ADD 1
			</button>
		</div>
	);
}

export default Card;
