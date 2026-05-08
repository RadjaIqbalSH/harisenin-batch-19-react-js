import { useState, createContext } from "react";
import { Outlet } from "react-router";
import Button from "./Button";
import { useTheme } from "../store/theme";

// export const ThemeContext = createContext(null);

function Navbar() {
	// const [theme, setTheme] = useState("dark");

	const { theme, changeTheme } = useTheme();

	function handlingLogin() {
		alert("Selamat anda telah login");
	}

	// const changeTheme = () => {
	// 	if (theme === "dark") {
	// 		setTheme("light");
	// 	} else {
	// 		setTheme("dark");
	// 	}
	// };

	return (
		<>
			{/* <ThemeContext
				value={{
					theme,
					changeTheme,
				}}
			> */}
			<div className="header">
				<span>Header</span>
				<Button handleClick={changeTheme}>Theme : {theme}</Button>
				<Button handleClick={handlingLogin}>Login</Button>
			</div>
			<Outlet
				context={{
					theme,
					changeTheme,
				}}
			/>
			{/* </ThemeContext> */}
		</>
	);
}

export default Navbar;
