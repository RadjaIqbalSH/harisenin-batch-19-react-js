import React, { useEffect, useState, type MouseEventHandler, type ReactElement, type ReactNode } from "react";
import Button from "./Button";
// import { ThemeContext } from "./Navbar";
import { useContext } from "react";
import { useTheme } from "../store/theme";

interface IAdreess {
	no: number;
	kecamatan: string;
}

interface ICardProps {
	film: string;
}

interface ICardProps {
	name: string;
	age: number;
	isMan: boolean;
	foods?: any[];
	address: IAdreess;
	children?: ReactNode;
}

interface IExample {
	name: string;
}

type TExample1 = string | number;

const example1: TExample1 = 10;
const example2: boolean = false;
const example3: number = 10;
const example4: IExample = {
	name: "Jhon Doe",
};
const example5: IExample = {
	name: "Jhon Doe",
};

type a = () => void;

const exampleFunc = (param1: string): a => {
	return () => {};
};

function Card(props: ICardProps) {
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
			{props.children}
			<p >Name Animal: {props.name}</p>
			<p>Count : {state}</p>
			<Button handleClick={handlingMin1}>MIN 1</Button>
			<Button handleClick={handlingAdd1}>ADD 1</Button>
			<Button handleClick={changeTheme}>Change Theme</Button>
		</div>
	);
}

export default Card;
