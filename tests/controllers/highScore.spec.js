const highScoreRoutes = require("../../controller/highScore")
const HighScore = require("../../models/HighScore")

const mockSend = jest.fn()
const mockJson = jest.fn()
const mockStatus = jest.fn((code) => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }
const mockReq = {
	body: {
		name: "Sarah",
		category: null,
		difficulty: null,
		score: 500,
	},
}

describe("highscore controller", () => {
	afterAll(() => jest.resetAllMocks())

	describe("index", () => {
		beforeEach(() => jest.clearAllMocks())

		test("it returns all high scores with 200", async () => {
			jest.spyOn(HighScore, "all").mockResolvedValue([
				{ name: "bob", score: 100 },
				{ name: "jim", score: 200 },
			])
			await highScoreRoutes.index(null, mockRes)
			expect(mockStatus).toHaveBeenCalledWith(200)
			expect(mockJson).toHaveBeenCalledWith([
				{ name: "bob", score: 100 },
				{ name: "jim", score: 200 },
			])
		})
	})

	describe("create", () => {
		beforeEach(() => jest.clearAllMocks())

		test("it creates high score and returns new data with 201", async () => {
			jest
				.spyOn(HighScore, "create")
				.mockResolvedValue({ name: "Sarah", score: 500 })
			await highScoreRoutes.create(mockReq, mockRes)
			expect(mockStatus).toHaveBeenCalledWith(201)
			expect(mockJson).toHaveBeenCalledWith({ name: "Sarah", score: 500 })
		})
	})
})

// describe('authors controller', () => {
//     beforeEach(() =>  jest.clearAllMocks());

//     afterAll(() => jest.resetAllMocks());

//     describe('index', () => {
//         test('it returns authors with a 200 status code', async () => {
//             jest.spyOn(Author, 'all', 'get')
//                  .mockResolvedValue(['author1', 'author2']);
//             await authorsController.index(null, mockRes);
//             expect(mockStatus).toHaveBeenCalledWith(200);
//             expect(mockJson).toHaveBeenCalledWith(['author1', 'author2']);
//         })
//     });

//     describe('show', () => {
//         test('it returns an author and their books with a 200 status code', async () => {
//             jest.spyOn(Author, 'findById')
//                 .mockResolvedValue(new Author({ id: 1, name: 'Test Author'} ));
//             jest.spyOn(Author.prototype, 'books', 'get')
//                 .mockResolvedValue(['book1', 'book2']);

//             const mockReq = { params: { id: 1 } }
//             await authorsController.show(mockReq, mockRes);
//             expect(mockStatus).toHaveBeenCalledWith(200);
//             expect(mockJson).toHaveBeenCalledWith({
//                 id: 1,
//                 name: 'Test Author',
//                 books: ['book1', 'book2']
//             });
//         })
//     });

// })
