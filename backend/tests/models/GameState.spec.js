const { GameState } = require("../../models/GameState")

const axios = require("axios")
jest.mock("axios")

const shuffle = require("../../utils/shuffleAnswers")
jest.mock("../../utils/shuffleAnswers")

const mockQuestions = [
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
	{
		category: "Food & Drink",
		id: "622a1c367cc59eab6f9502b1",
		correctAnswer: "Egg",
		incorrectAnswers: ["Cheese", "Soured Cream", "Milk"],
		question: "What Is The Principle Ingredient Of Mayonnaise?",
		tags: ["food_and_drink"],
		type: "Multiple Choice",
		difficulty: "medium",
		regions: [],
		isNiche: false,
	},
]

let game

describe("GameState modal", () => {
	game = new GameState("_room")

	beforeEach(() => jest.clearAllMocks())

	afterAll(() => jest.resetAllMocks())

	test("adds player host", async () => {
		expect(game.users).toHaveLength(0)
		await game.addPlayer({
			userId: "1",
			name: "bob",
			isHost: true,
			score: 1000,
			icon: "url/img",
			questionNo: 1,
		})
		expect(game.users).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					userId: "1",
					name: "bob",
					isHost: true,
					score: 1000,
					icon: "url/img",
					questionNo: 1,
				}),
			])
		)
	})

	test("adds player (not host)", async () => {
		await game.addPlayer({
			userId: "2",
			name: "jim",
			isHost: false,
			score: 1000,
			icon: "url/img",
			questionNo: 1,
		})
		expect(game.users).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					userId: expect.any(String),
					name: expect.any(String),
					isHost: false,
					score: expect.any(Number),
					icon: expect.any(String),
					questionNo: expect.any(Number),
				}),
			])
		)
	})

	test("updates player", async () => {
		await game.updatePlayer({
			userId: "1",
			name: "bob",
			isHost: true,
			score: 2000,
			icon: "url/img",
			questionNo: 1,
		})
		expect(game.users).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					userId: expect.any(String),
					name: expect.any(String),
					isHost: expect.any(Boolean),
					score: 2000,
					icon: expect.any(String),
					questionNo: expect.any(Number),
				}),
			])
		)
	})

	test("removes host player", async () => {
		await game.removePlayer("1")
		expect(game.users).toHaveLength(1)
		// expect(removed).toEqual("Host Removed")
	})

	test("last player is host", async () => {
		expect(game.users[0]["isHost"]).toEqual(true)
	})

	test("initialises questions", async () => {
		await game.initQuestions()
		expect(axios.all).toHaveBeenCalledTimes(1)
		expect(axios.get).toHaveBeenCalledTimes(3)
		expect(axios.get).toHaveBeenLastCalledWith(
			"https://the-trivia-api.com/api/questions?limit=6&difficulty=hard"
		)
		expect(axios.spread).toHaveBeenCalledTimes(1)
	})

	test("starts game", async () => {
		const started = await game.startGame()
		expect(game.isGameStarted).toEqual(true)
	})

	test("ends game", async () => {
		const ended = await game.endGame()
		expect(ended).toEqual("Game ended")
	})
})
