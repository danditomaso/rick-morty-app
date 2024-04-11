import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ApolloContext from "./context/apollo.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		// children: [
		// 	{
		// 		path: "team",
		// 		element: <Team />,
		// 		loader: teamLoader,
		// 	},
		// ],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloContext>
			<>
				<RouterProvider router={router} />
			</>
		</ApolloContext>
	</React.StrictMode>,
);
