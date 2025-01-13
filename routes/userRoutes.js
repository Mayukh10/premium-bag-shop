const express = require('express');
const userModel = require('../models/user-model');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  {registerUser, loginUser} = require('../controllers/authController');



router.get('/', (req, res) => {
    res.send("hey");
})

router.post('/register', registerUser);   

router.post('/login', loginUser);



module.exports = router;

