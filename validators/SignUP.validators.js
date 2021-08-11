
const { check } = require('express-validator');


module.exports = [
    check('UserName').matches((/^[a-zA-Z0-9]+$/)),
    check('Email').isEmail(),
    check('Password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    check('rePassword').custom((value, { req }) => {
        if (value !== req.body.Password) {
            return false;
        }
        return true;
    })
]