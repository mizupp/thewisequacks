const shuffle = require("../../utils/shuffleAnswers")

const mockQ = [
	{
		category: "History",
		id: "63a039c8c7d86251f9b65cb4",
		correctAnswer: "Andrew Johnson",
		incorrectAnswers: ["John Adams", "Thomas Jefferson", "James Madison"],
		question: "Who was the first president to be impeached?",
		tags: ["history", "usa", "presidents", "firsts"],
		type: "Multiple Choice",
		difficulty: "hard",
		regions: [],
		isNiche: false,
	},
]

describe("shuffle answers fetched from trivia api", () => {
	test("it should return question with shuffled answers added as property", () => {
		const shuffleMock = jest.spyOn(shuffle, "addShuffled")

		shuffleMock.mockImplementation(() => "mock")
		const a = shuffle.addShuffled(mockQ)
		expect(a).toEqual("mock")

		shuffleMock.mockRestore()
		const b = shuffle.addShuffled(mockQ)
		expect(b[0]["answers"]).toBeDefined()
		// expect(b[0]).toEqual()
		expect(b[0]).toEqual(
			expect.objectContaining({
				answers: expect.arrayContaining([
					expect.objectContaining({
						isCorrect: true,
						text: expect.any(String),
					}),
					expect.objectContaining({
						isCorrect: false,
						text: expect.any(String),
					}),
					expect.objectContaining({
						isCorrect: false,
						text: expect.any(String),
					}),
					expect.objectContaining({
						isCorrect: false,
						text: expect.any(String),
					}),
				]),
				category: expect.any(String),
				id: expect.any(String),
				correctAnswer: expect.any(String),
				incorrectAnswers: expect.any(Array),
				question: expect.any(String),
				tags: expect.any(Array),
				type: expect.any(String),
				difficulty: expect.any(String),
				regions: expect.any(Array),
				isNiche: expect.any(Boolean),
			})
		)
	})
})
