const Profile = require("../../models/profile");

async function create(req, res) {
  // const profileId = req.params.id;
  req.body.user = req.user._id;
  console.log("this is the req body");
  console.log(req.body);
  let newProfile = new Profile({
    userId: req.body.user,
    about: req.body.about,
    imageUrl: req.body.imageUrl,
    profession: req.body.profession,
    portfolio: req.body.portfolio,
    linkedin: req.body.linkedin,
    twitter: req.body.twitter,
    github: req.body.github,
    skill1: req.body.skill1,
    skill2: req.body.skill2,
    skill3: req.body.skill3,
    desiredSkill1: req.body.desiredSkill1,
    desiredSkill2: req.body.desiredSkill2,
    desiredSkill3: req.body.desiredSkill3,
  });
  console.log(newProfile);
  await newProfile.save();
  res.status(200).json(newProfile);
  // return res.send("This is the controllers profile create response");
}

async function show(req, res) {
  try {
    const userProfile = await Profile.findOne({ userId: req.params.id }).exec();
    console.log(userProfile);
    res.status(200).json(userProfile);
  } catch (err) {
    res.status(404).json("Fail");
  }
}

// async function Edit(rew, res) {
//let profileInfo = Profile.findOne({ userId: req.user._id}).then(profileInfo => console.log(profileInfo)
// return res.json(profileInfo)
//}

module.exports = {
  create,
  show,
};
