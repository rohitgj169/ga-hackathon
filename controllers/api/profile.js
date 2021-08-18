const Profile = require("../../models/profile");

async function create(req,res) {
  console.log(req.body.about);
  req.body.user = req.user._id;
  let newProfile = new Profile({userId: req.body.user, about: req.body.about.bio})
  console.log(newProfile);
  // await newProfile.save()

  return res.send('This is the controllers profile create response')
}

// async function Edit(rew, res) {
  //let profileInfo = Profile.findOne({ userId: req.user._id}).then(profileInfo => console.log(profileInfo)
// return res.json(profileInfo)
//}



module.exports = {
  create,
}