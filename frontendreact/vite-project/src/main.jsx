import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom"
import HomePage from "./pages/home"
import Game from './pages/game'
import Winner from './pages/winner'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "game",
		element: <Game />,
	},
	{
		path: "winner",
		element: <Winner />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
