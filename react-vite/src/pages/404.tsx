import { redirect } from "react-router";

const Page404 = () => {
	return (
		<>
			<h1>Not Found 404</h1>
			<button
				onClick={() => {
					redirect("/");
				}}
			>
				Go Back to index
			</button>
		</>
	);
};

export default Page404;
