const User = require("../models/user");

module.exports = {
    getProfile,
    updateProfile
}

let userExists = true;

async function updateProfile(req, res) {
    console.log('This is the controllers req.body...')
    console.log(req.body.userObj.props.userObj)
    let userGoogleId = req.body.userObj.props.userObj.googleId
    let bio = req.body.Bio.bio

    let user = await User.findOneAndUpdate({googleId: userGoogleId},{about: bio})

    console.log('this is the mongodb user data')
   console.log(user)

    return res.send('<h1>This is the controller response</h1>')
}

async function createProfile(body){
    console.log(body)
    if (body.user.name == undefined){
        return
    } 
     let user = new User({
        googleId: body.user.googleId,
        imageUrl: body.user.imageUrl,
        email: body.user.email,
        name: body.user.name,
        givenName: body.user.givenName,
        familyName: body.user.familyName,
    })
    try {
        await user.save();
        console.log("user created!")
        console.log(user)
      } catch (err) {
        console.log("this is the catch err" + err);
      }
}


async function getProfile(req, res){
    console.log('I reached createProfile')
    // console.log("this is the request! \n")
    // console.log(req.body)
    User.find({ googleId: req.body.user.googleId}, (err, item) => {
        if (item.length > 0){
             console.log("this is the item find ")
             console.log(item)
        } else {
            console.log('user doesnt exist')
            createProfile(req.body)
        }
    })
    return res.send('you made it to the end!')
}