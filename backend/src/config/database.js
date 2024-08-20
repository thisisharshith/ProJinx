const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const connectDB = async () => {
  try {
    const connection = await pool.getConnection(); // Await the connection
    console.log('MySQL database connected');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
