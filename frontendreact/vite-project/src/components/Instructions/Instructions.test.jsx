import { describe, expect, it } from "vitest"

import Instructions from "."

// import { render, screen, userEvent } from "../../utils/test-utils"
import { render, screen } from "@testing-library/react"

describe("Instructions", () => {
	test("should render the instructions", () => {
		render(<Instructions />)

		expect(screen.getByRole("Instructions")).toBeInTheDocument()
	})
})
