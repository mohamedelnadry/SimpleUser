const mongoose = require('mongoose')
const Usermodel = mongoose.Schema({
    UserName: String,
    Email: String,
    Password: String
})


module.exports = mongoose.model('users',Usermodel)