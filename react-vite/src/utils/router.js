import { createBrowserRouter } from "react-router";

import App from "../App.jsx";
import AboutPage from "../pages/about.jsx";
import ContactPage from "../pages/contact.jsx";
import PricePage from "../pages/price.jsx";
import Page404 from "../pages/404.jsx";
import Navbar from "../components/Navbar.jsx";
import LoginPage from "../pages/login.jsx";
import Menu from "../pages/menu.jsx";
import MenuCreate from "../pages/menuCreate.jsx";
import MenuUpdate from "../pages/menuUpdatae.jsx";
import MenuDetail from "../pages/menuDetail.jsx";

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
	// mini menu
	{
		path: "/menu",
		children: [
			{
				index: true,
				Component: Menu,
			},
			{
				path: "create",
				Component: MenuCreate,
			},
			{
				path: "update/:id",
				Component: MenuUpdate,
			},
			{
				path: ":id",
				Component: MenuDetail,
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
		// middleware: [autoRedirectMiddleware],
	},
]);

export default router;
