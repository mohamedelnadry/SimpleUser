const app = require('express').Router()
const bcrypt = require('bcrypt');
const User = require('../models/user')
var jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    const { Email, Password } = req.body
    const MyEmail = await User.findOne({ Email })
    if (MyEmail) {
        const match = await bcrypt.compare(Password, MyEmail.Password);
        if (match) {
            let token = jwt.sign({ UserName: MyEmail.UserName, isLogin: true, UserID: MyEmail._id, role: "User" }, 'tezk 7mra',{ expiresIn: 60 * 60 }); //expired after 1h
            res.json({ "token": token })
        } else {
            res.json("your passowrd is invalid, please try again")
        }
    } else {
        res.json("email doesnt exist")
    }

})


module.exports = app