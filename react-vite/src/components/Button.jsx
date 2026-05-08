import React, { useContext } from "react";
// import { ThemeContext } from "./Navbar";
import { useTheme } from "../store/theme";

const Button = (props) => {
	const { theme } = useTheme();

	// const { theme } = useContext(ThemeContext);

	return (
		<button
			style={{
				margin: "12px 8px",
				backgroundColor: theme === "dark" ? "black" : "blue",
			}}
			onClick={props.handleClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
