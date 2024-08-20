const { pool } = require('../config/database');

class User {
  static async create(username, password) {
    const [result] = await pool.execute(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      [username, password]
    );
    return { id: result.insertId, username };
  }

  static async findByUsername(username) {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE username = ?',
      [username]
    );
    return rows[0] || null;
  }
}

module.exports = User;