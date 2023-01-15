import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./Products";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage";

const router = createBrowserRouter([
	{
		path: "/products/:page",
		element: <Products />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
