import Lobby from "."
// import Instructions from "../Instructions"
import store from "../../store"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

describe("lobby", async () => {
	it("Should render the lobby", async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Lobby />
				</Provider>
			</BrowserRouter>
		)
		screen.debug()
	})
})
