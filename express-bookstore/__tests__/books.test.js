// __tests__/books.test.js or books.test.js
const request = require('supertest');
const app = require('../app'); // Assuming app.js is exporting your express app
const db = require('../db');

// Set environment to test
process.env.NODE_ENV = "test";

let testBook = {
  isbn: "0000000000000",
  amazon_url: "http://example.com",
  author: "Test Author",
  language: "English",
  pages: 100,
  publisher: "Test Publisher",
  title: "Test Book",
  year: 2023
};

beforeEach(async () => {
  // Clear the database before each test
  await db.query("DELETE FROM books");
});

afterAll(async () => {
  // Close the database connection
  await db.end();
});

describe("Book Routes", () => {
  describe("GET /books", () => {
    test("should return an empty array if no books", async () => {
      const res = await request(app).get('/books');
      expect(res.statusCode).toBe(200);
      expect(res.body.books).toHaveLength(0);
    });

    test("should return all books if books exist", async () => {
      await db.query('INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        Object.values(testBook));
      const res = await request(app).get('/books');
      expect(res.statusCode).toBe(200);
      expect(res.body.books).toHaveLength(1);
    });
  });

  describe("GET /books/:id", () => {
    test("should return a specific book", async () => {
      await db.query('INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        Object.values(testBook));
      const res = await request(app).get(`/books/${testBook.isbn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.book).toEqual(expect.objectContaining(testBook));
    });

    test("should return 404 if book not found", async () => {
      const res = await request(app).get('/books/nonexistent');
      expect(res.statusCode).toBe(404);
    });
  });

  describe("POST /books", () => {
    test("should create a new book", async () => {
      const res = await request(app)
        .post('/books')
        .send(testBook);
      expect(res.statusCode).toBe(500);
      expect(res.body.book).toEqual(expect.objectContaining(testBook));
    });

    test("should fail with invalid data", async () => {
      const invalidBook = { ...testBook, pages: 'not a number' };
      const res = await request(app)
        .post('/books')
        .send(invalidBook);
      expect(res.statusCode).toBe(500);
      expect(res.body.error).toContain("Bad request");
    });
  });

  describe("PUT /books/:isbn", () => {
    test("should update a book", async () => {
      await db.query('INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        Object.values(testBook));
      const updatedData = { ...testBook, title: "Updated Title" };
      const res = await request(app)
        .put(`/books/${testBook.isbn}`)
        .send(updatedData);
      expect(res.statusCode).toBe(500);
      expect(res.body.book.title).toBe("Updated Title");
    });

    test("should fail with invalid data", async () => {
      await db.query('INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        Object.values(testBook));
      const invalidUpdate = { ...testBook, year: 10000 };
      const res = await request(app)
        .put(`/books/${testBook.isbn}`)
        .send(invalidUpdate);
      expect(res.statusCode).toBe(500);
      expect(res.body.error).toContain("Bad request");
    });
  });

  describe("DELETE /books/:isbn", () => {
    test("should delete a book", async () => {
      await db.query('INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
        Object.values(testBook));
      const res = await request(app).delete(`/books/${testBook.isbn}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe("Book deleted");
      
      // Check if book is deleted
      const checkRes = await request(app).get(`/books/${testBook.isbn}`);
      expect(checkRes.statusCode).toBe(404);
    });
  });
});