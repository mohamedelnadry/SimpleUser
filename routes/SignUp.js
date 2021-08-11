const app = require('express').Router()
const { validationResult } = require('express-validator');
const User = require('../models/user')
const bcrypt = require('bcrypt');


app.post('/SignUp', async (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        const { UserName, Email, Password } = req.body
        const myuser = await User.findOne({ Email })
        if (myuser) {
            res.json("user already exist")
        } else {
            bcrypt.hash(Password, 7, async (err, hash) => {
                await User.insertMany({ UserName, Email, Password: hash })
                res.json("User Created")
            })
        };

    } else {
        res.json(errors.array())
    }

})

module.exports = app