import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button";
import { useTheme } from "../store/theme";

const LoginPage = () => {
	const { changeTheme } = useTheme();

	return (
		<>
			<Navbar />
			<Button>Click Me</Button>
			<Button handleClick={changeTheme}>Change Theme</Button>
		</>
	);
};

export default LoginPage;
