const request = require("supertest")
const app = require("../index")  // path to your index.js

describe("GET /", () => {
    it("should return JSON with message", async () => {
        const res = await request(app).get("/")
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ message: "This should work fine?" })
    })
})
