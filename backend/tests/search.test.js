const request = require("supertest");
const app = require("../index");
const connectDB = require("../db/connect");

let server;

beforeAll(async () => {
  // Connect to test database
  await connectDB(process.env.MONGO_URI)
});

afterAll(async () => {
  // Close database connection
  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }
});

describe("Search API - Integration Test", () => {
  it("should return results for a valid query", async () => {
    const res = await request(app).get("/api/v1/search?q=database");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("totalCount");
    expect(Array.isArray(res.body.results)).toBe(true);
  });

  it("should handle empty query", async () => {
    const res = await request(app).get("/api/v1/search?q=");

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message");
  });

  it("should support filter parameter", async () => {
    const res = await request(app).get("/api/v1/search?q=test&filter=Books");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("results");
  });

  it("should support pagination", async () => {
    const res = await request(app).get("/api/v1/search?q=database&page=1&limit=12");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("page");
    expect(res.body).toHaveProperty("limit");
    expect(res.body.page).toBe(1);
  });

  it("should support subject and year filters", async () => {
    const res = await request(app).get("/api/v1/search?q=test&subject=Technology&year=2024");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("results");
  });
});