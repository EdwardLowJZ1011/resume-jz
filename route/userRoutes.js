const express = require("express");
const User = require('./models/userModels');
const firedatabase = require("./utils/firebase");
const generateToken = require('./utils/generateToken.js');
const otpGenerator = require('otp-generator')
const router = express.Router()

router.post("/login", async(req, res) => {
    
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
});

router.post('/register', async(req, res)=>{
    
        const { name, email, password } = req.body  
        const userExisted = await User.findOne({ email })
    
        if (userExisted) {
            res.status(400)
            throw new Error('User already Existed')
        }
    
        const user = await User.create({
            name,
            email,
            password
        })
    
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }
        else {
            res.status(400)
            throw new Error('Invalid User Data')
        }    
})

router.post('/otp', async(req, res)=>{

    random = Math.ceil((Math.random() * (100 * (Math.random()/2) + 2) + 50) % 2) - 1

    otp = otpGenerator.generate(6, {digits: random, upperCaseAlphabets: !random, specialChars: !random });

    response = firedatabase.ref("resume-otp").set({
        otp: otp
    })

    console.log(response)

    res.status(201).json({
        status: 'success',
    })

})

module.exports = router;
