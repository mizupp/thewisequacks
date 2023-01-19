const request = require("supertest")
// const http = require("http")
const { app } = require("../server")
// const io = require("socket.io")

// const socket = require("socket.io")
// const socketAdmin = require("@socket.io/admin-ui")
// socket.Server = jest.fn()
// socketAdmin.instrument = jest.fn()

describe("api routes", () => {
	it("should respond 200", async () => {
		await request(app)
			.get(`/`)
			.expect(200)
			.then((res) => {
				expect(res.headers["content-type"]).toMatch(/json/)
				expect(res.body).toBeDefined()
				expect(res.body).toContain("Early Bird")
			})
	})

	it("should respond 200", async () => {
		await request(app)
			.get(`/highscores`)
			.expect(200)
			.then((res) => {
				expect(res.headers["content-type"]).toMatch(/json/)
				expect(res.body).toBeDefined()
				// expect(res.body).
			})
	})
})
