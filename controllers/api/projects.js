const Project = require("../../models/project");

async function index(req, res) {
  try {
    const projects = await Project.find({}).populate("creator");
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json("failed to retrieve projects");
  }
}

async function create(req, res) {
  try {
    console.log(req.body);
    req.body.creator = req.user._id;
    const newProject = await Project.create(req.body);
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json("failed to create project");
  }
}

async function getProjectInfo(req, res) {
  try{
    const project = await Project.findById(req.params.projectId).populate("creator");
    res.status(200).json(project);
  } catch(err) {
    res.status(400).json("failed to retrieve project")
  }
}

async function addToProject(req,res) {

}

module.exports = {
  index,
  create,
  getProjectInfo,
  addToProject,
};
