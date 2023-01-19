const HighScore = require("../../models/HighScore")
const mongo = require("mongodb")
jest.mock("mongodb")
const db = require("../../db/init")
jest.mock("../../db/init")

describe("HighScore Modal", () => {
	beforeEach(() => jest.clearAllMocks())

	afterAll(() => jest.resetAllMocks())

	test("it resolves with all highscores on successful db query", async () => {
		const initMock = jest.spyOn(db, "init")
		initMock.mockImplementation(() => ({
			collection: jest.fn().mockImplementation(() => ({
				find: jest.fn().mockImplementation(() => ({
					toArray: () => [
						{ name: "bob", score: 100 },
						{ name: "jim", score: 200 },
					],
				})),
			})),
		}))

		const all = await HighScore.all()
		expect(all).toHaveLength(2)
		expect(all).toStrictEqual([
			{ name: "bob", score: 100 },
			{ name: "jim", score: 200 },
		])
	})

	test("it resolves with new highscore on successful db query", async () => {
		const initMock = jest.spyOn(db, "init")
		initMock.mockImplementation(() => ({
			collection: jest.fn().mockImplementation(() => ({
				insertOne: () => jest.fn(),
			})),
		}))

		const created = await HighScore.create("Jen", null, null, "400")
		expect(created).toBeInstanceOf(HighScore)
		expect(created).toEqual({ name: "Jen", score: "400" })
	})
})
