const request = require("supertest")
const { app } = require("../server")

describe("main api route", () => {
	it("/ should respond 200", async () => {
		await request(app)
			.get(`/`)
			.expect(200)
			.then((res) => {
				expect(res.headers["content-type"]).toMatch(/json/)
				expect(res.body).toBeDefined()
				expect(res.body).toContain("Early Bird")
			})
	})
})
