import { useReducer } from "react";

const reducer = (state, action) => {
	if (action === "add") {
		return state + 1;
	} else if (action == "min") {
		return state - 1;
	} else {
		return state;
	}
};

const ContactPage = () => {
	const [count, reducerCount] = useReducer(reducer, 0);

	return (
		<>
			<h1>Contact Page</h1>
			<p>Count : {count}</p>
			<button
				onClick={() => {
					reducerCount("add");
				}}
			>
				Plus 1
			</button>
			<button
				onClick={() => {
					reducerCount("min");
				}}
			>
				Min 1
			</button>
		</>
	);
};

export default ContactPage;
