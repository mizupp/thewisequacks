import HomePage from "."
// import Instructions from "../Instructions"
import store from "../../store"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

describe("Modal", async () => {
	it("should render the modal for highscore", async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<HomePage />
				</Provider>
			</BrowserRouter>
		)
		const highScoreButton = screen.getByRole("button", { name: "High Score" })
		// console.log(highScoreButton)
		fireEvent.click(highScoreButton)
		expect(screen.getByRole("HighScoreTable")).toBeInTheDocument()
		const closeButton = screen.getByRole("button", { name: "Close" })
		fireEvent.click(closeButton)
		await waitFor(() => {
			expect(screen.queryByRole("HighScoreTable")).not.toBeInTheDocument()
		})
	})
	it("should render the modal for instructions", async () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<HomePage />
				</Provider>
			</BrowserRouter>
		)
		const InstructionsButton = screen.getByRole("button", {
			name: "Instructions",
		})
		// console.log(InstructionsButton)
		fireEvent.click(InstructionsButton)
		expect(screen.getByRole("Instructions")).toBeInTheDocument()
		const closeButton = screen.getByRole("button", { name: "Close" })
		fireEvent.click(closeButton)
		await waitFor(() => {
			expect(screen.queryByRole("Instructions")).not.toBeInTheDocument()
		})
	})

	it("should render the StartGame", () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<HomePage />
				</Provider>
			</BrowserRouter>
		)
		expect(screen.getByRole("StartGame")).toBeInTheDocument()
	})

	// it("Should be redirected to lobby when clicking create game", async () => {
	// 	render(
	// 		<BrowserRouter>
	// 			<Provider store={store}>
	// 				<HomePage />
	// 			</Provider>
	// 		</BrowserRouter>
	// 	)
	// 	const createGameButton = screen.getByText("Create game")

	// 	fireEvent.click(createGameButton)
	// 	screen.debug()
	// })
})
