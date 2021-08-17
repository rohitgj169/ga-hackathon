const User = require("../models/user");

module.exports = {
    createProfile
}


function createProfile(req, res){
    console.log('I reached createProfile')
    console.log(req.body)
    return res.send('you made it to the end!')
    
}