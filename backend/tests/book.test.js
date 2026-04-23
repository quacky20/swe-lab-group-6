const request = require("supertest");
const app = require("../index");
const connectDB = require("../db/connect");
const jwt = require("jsonwebtoken");

let testToken;

beforeAll(async () => {
  await connectDB(process.env.MONGO_URI);
  
  testToken = jwt.sign(
    { email: "test@admin.com", id: "test-admin-id" },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
});

describe("Book API - Integration Test", () => {
  let createdIsbn;

  it("should add a new book", async () => {
    const res = await request(app)
      .post("/api/v1/books")
      .set("Authorization", `Bearer ${testToken}`)
      .send({
        isbn: "9780000006612",
        title: "Test Book",
        authors: ["Test Author"],
        subject: "Technology",
        year: 2024,
        description: "A test book"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("newBook");
    expect(res.body.newBook).toHaveProperty("isbn");
    createdIsbn = res.body.newBook.isbn;
  });

  it("should fetch all books", async () => {
    const res = await request(app).get("/api/v1/books");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("books");
    expect(Array.isArray(res.body.books)).toBe(true);
  });

  it("should fetch a book by ISBN", async () => {
    const res = await request(app).get("/api/v1/books/9780000006612");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("book");
  });

  it("should return 404 for invalid ISBN", async () => {
    const res = await request(app).get("/api/v1/books/invalid");

    expect(res.statusCode).toBe(404);
  });

  it("should delete the created book", async () => {
    const res = await request(app)
      .delete("/api/v1/books/9780000006612")
      .set("Authorization", `Bearer ${testToken}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });

  it("should verify the book is deleted", async () => {
    const res = await request(app).get("/api/v1/books/9780000006612");

    expect(res.statusCode).toBe(404);
  });
});