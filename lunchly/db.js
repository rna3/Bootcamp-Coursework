/** Database for lunchly */
const pg = require("pg");
require('dotenv').config();

const db = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'localhost',
    port: 5432,
  });

db.connect();

// Error handling for connection
db.on('error', err => {
    console.error('Database connection error:', err.stack);
  });

module.exports = db;
