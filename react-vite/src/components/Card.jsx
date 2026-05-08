import React, { useEffect, useState } from "react";
import Button from "./Button";
// import { ThemeContext } from "./Navbar";
import { useContext } from "react";
import { useTheme } from "../store/theme";

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

	// const { changeTheme } = useContext(ThemeContext);

	const { changeTheme } = useTheme();

	return (
		<div className="card">
			<p>Name Animal: {props.name}</p>
			<p>Count : {state}</p>
			<Button handleClick={handlingMin1}>MIN 1</Button>
			<Button handleClick={handlingAdd1}>ADD 1</Button>
			<Button handleClick={changeTheme}>Change Theme</Button>
		</div>
	);
}

export default Card;
