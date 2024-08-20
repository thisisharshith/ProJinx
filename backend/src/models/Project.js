const { pool } = require('../config/database');

class Project {
  static async create(userId, title, description, status) {
    const [result] = await pool.execute(
      'INSERT INTO projects (user_id, title, description, status) VALUES (?, ?, ?, ?)',
      [userId, title, description, status]
    );
    return { id: result.insertId, user_id: userId, title, description, status };
  }

  static async findByUserId(userId) {
    const [rows] = await pool.execute(
      'SELECT * FROM projects WHERE user_id = ?',
      [userId]
    );
    return rows;
  }

  static async update(id, title, description, status) {
    await pool.execute(
      'UPDATE projects SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, id]
    );
  }
}

module.exports = Project;