import { useCallback, useMemo, useState } from "react";
import Logo from "../components/Navbar/Logo";

const AboutPage = () => {
	const [count, setCount] = useState(10);

	const example = useCallback(() => {
		//
	}, [count]);

	const example2 = useMemo(() => {
		console.log("triggered");
		return 2;
	}, []);

	console.log("example2 => ", example2);
	return (
		<>
			<h1>Page About</h1>
			<p>Count : {count}</p>
			<button onClick={() => setCount((current) => current + 5)}>
				Add 1
			</button>
		</>
	);
};

export default AboutPage;
