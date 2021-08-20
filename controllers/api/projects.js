const Project = require("../../models/project");
const Profile = require("../../models/profile");

async function index(req, res) {
  try {
    const projects = await Project.find({}).populate("creator");
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json("failed to retrieve projects");
  }
}

async function getUserProject(req, res) {
  console.log(req.user._id);
  try {
    const projects = await Project.find({creator: req.user._id});
    console.log(projects)
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
    const project = await Project.findById(req.params.projectId).populate("creator").populate("members");
    res.status(200).json(project);
  } catch(err) {
    res.status(400).json("failed to retrieve project")
  }
}



async function addToProject(req,res) {
  try {
    const project = await Project.findById(req.params.id);
    console.log(project);
    const profile = await Profile.findOne({userId:req.user._id});
    console.log(profile);
    const newMember = {
      role: profile.profession,
    }
    project.members.push(req.user._id);
    project.memberProfiles.push(newMember);
    await project.save();
    res.status(200).json("Successfully added");
  } catch(err) {
    res.status(400).json("failed to add");
  }
}

module.exports = {
  index,
  create,
  getProjectInfo,
  addToProject,
  getUserProject,
};
