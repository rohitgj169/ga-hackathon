const Profile = require("../../models/profile");

async function create(req,res) {
  req.body.user = req.user._id;
  let newProfile = new Profile({userId: req.body.user, about: req.body.about.bio})
  console.log(newProfile);
  await newProfile.save()

  return res.send('This is the controllers profile create response')
}


async function show(req,res) {
  try{

    const userProfile = await Profile.findOne({userId:req.params.id}).exec();
    console.log(userProfile);
    res.status(200).json(userProfile);
  } catch (err) {
    res.status(404).json("Fail")
  }
}

// async function Edit(rew, res) {
  //let profileInfo = Profile.findOne({ userId: req.user._id}).then(profileInfo => console.log(profileInfo)
// return res.json(profileInfo)
//}

module.exports = {
  create,
  show,
}