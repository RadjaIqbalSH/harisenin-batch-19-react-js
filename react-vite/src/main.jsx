import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { create } from "zustand";

import "./index.css";
import router from "./utils/router";

const element = document.getElementById("root");
const root = createRoot(element);

/**
 * Declarative mode
 */
// root.render(
// 	<>
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<App />} />
// 				<Route path="/about" element={<AboutPage />} />
// 				<Route path="/contact" element={<ContactPage />} />
// 				<Route path="/price" element={<PricePage />} />
// 				<Route path="*" element={<Page404 />} />
// 			</Routes>
// 		</BrowserRouter>
// 	</>
// );

root.render(
	<>
		<RouterProvider router={router} />
	</>
);
