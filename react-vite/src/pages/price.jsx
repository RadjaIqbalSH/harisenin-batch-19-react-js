import { useRef } from "react";
import Navbar from "../components/Navbar";

const PricePage = () => {
	const example = useRef(null);

	return (
		<>
			<h1 ref={example}>Price Page</h1>
			<button
				onClick={() => {
					console.log(
						"example.current => ",
						(example.current.style.color = "red")
					);
				}}
			>
				Ubah text
			</button>
		</>
	);
};

export default PricePage;
