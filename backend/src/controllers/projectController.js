const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findByUserId(req.user.id);
    res.json(projects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const project = await Project.create(req.user.id, title, description, status);
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;
    await Project.update(id, title, description, status);
    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};