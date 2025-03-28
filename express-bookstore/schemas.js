// schemas.js
const jsonschema = require('jsonschema');

const bookSchema = {
  type: 'object',
  required: ['isbn', 'amazon_url', 'author', 'language', 'pages', 'publisher', 'title', 'year'],
  properties: {
    isbn: { type: 'string' },
    amazon_url: { type: 'string' },
    author: { type: 'string' },
    language: { type: 'string' },
    pages: { type: 'integer', minimum: 1 },
    publisher: { type: 'string' },
    title: { type: 'string' },
    year: { type: 'integer', minimum: 1000, maximum: new Date().getFullYear() + 1 }
  },
  additionalProperties: false
};

const bookUpdateSchema = {
  type: 'object',
  properties: {
    amazon_url: { type: 'string' },
    author: { type: 'string' },
    language: { type: 'string' },
    pages: { type: 'integer', minimum: 1 },
    publisher: { type: 'string' },
    title: { type: 'string' },
    year: { type: 'integer', minimum: 1000, maximum: new Date().getFullYear() + 1 }
  },
  additionalProperties: false
};

module.exports = {
  bookSchema,
  bookUpdateSchema
};