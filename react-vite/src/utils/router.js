import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PricePage from "../pages/price.jsx";
import Page404 from "../pages/404.jsx";
import Navbar from "../components/Navbar.jsx";
import LoginPage from "../pages/login.jsx";

async function autoRedirectMiddleware({ context }) {
	throw redirect("/");
}

const router = createBrowserRouter([
	{
		path: "/",
		Component: Navbar,
		children: [
			{
				index: true,
				Component: App,
			},
			{
				path: "/about",
				Component: AboutPage,
			},
			{
				path: "/contact",
				Component: ContactPage,
			},
			{
				path: "/price",
				Component: PricePage,
			},
		],
	},
	{
		path: "login",
		Component: LoginPage,
	},

	{
		path: "*",
		Component: Page404,
		middleware: [autoRedirectMiddleware],
	},
]);

export default router;
