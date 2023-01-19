import MyModal from "."
import Instructions from "../Instructions"

import { render, screen } from "@testing-library/react"

describe("Modal", () => {
	it("should render the modal", () => {
		render(<MyModal Component={<Instructions />} />)
		expect(screen.getByRole("modal")).toBeInTheDocument()
	})

	it("should render the component passed in", () => {
		render(<MyModal setOpen={true} Component={<Instructions />} />)
		// screen.debug()
		expect(screen.getByRole("Instructions")).toBeInTheDocument()
	})
})
