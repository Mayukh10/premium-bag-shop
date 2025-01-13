const bcrypt = require('bcrypt');
const userModel = require('../models/user-model');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async function (req, res) {

    try {
        let { email, password, Fullname } = req.body;

        let user = await userModel.findOne({ email: email })
        if (user) return res.status(400).send("User already exist");

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        Fullname,

                    });

                    let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("user created Successfully");
                }
            });
        });


    }

    catch (err) {
        console.log(err.message);


    }
}

module.exports.loginUser = async function (req, res) {
    try {
        let { email, password } = req.body;

        let user = await userModel.findOne({ email: email });
        if (!user) return res.status(400).send("User not found");

        bcrypt.compare(password, user.password, function (err, isPasswordCorrect) {
            if (isPasswordCorrect) {
                let token = generateToken(user);
                res.cookie("token", token);
                res.redirect("/shop");
            }
        
        else{
            res.status(400).send("Email or password is incorrect");
        }
    })
    }
    catch (err) {
        console.log(err.message);
    }
}