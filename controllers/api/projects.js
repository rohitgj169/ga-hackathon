const Project = require("../../models/project");

async function index(req, res) {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json("failed to retrieve projects");
  }
}

async function create(req, res) {
  try {
    req.body.creator = req.user._id;
    const newProject = await Project.create(req.body);
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json("failed to create project");
  }
}

module.exports = {
  index,
  create,
}
