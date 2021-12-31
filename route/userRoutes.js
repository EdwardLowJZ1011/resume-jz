const express = require("express");
const User = require("./models/userModels");
const firedatabase = require("./utils/firebase");
const generateToken = require("./utils/generateToken.js");
const otpGenerator = require("otp-generator");
const router = express.Router();
const nodemailer = require("nodemailer");
const { response } = require("express");
const date = require("date-and-time");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      success: true
    });
  } else {
    res.status(401).json({
      success: false
    });
    throw new Error("Invalid email or password");
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExisted = await User.findOne({ email });

  if (userExisted) {
    res.status(400);
    throw new Error("User already Existed");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

router.post("/otp", async (req, res) => {
  random =
    Math.ceil((Math.random() * (100 * (Math.random() / 2) + 2) + 50) % 2) - 1;

  otp = otpGenerator.generate(6, {
    digits: random,
    upperCaseAlphabets: !random,
    specialChars: !random,
  });

  const response = await firedatabase.ref("resume-otp").set({
    otp: otp,
    timestamp: new Date().getTime(),
    maxAge: 120,
  });

  let smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "edwardlow199701@gmail.com",
      pass: "low@1011",
    },
  });

  let mailOptions = {
    from: "AutoRobot <noply@gmail.com>",
    to: "jinzhang0620@gmail.com",
    subject: `OTP`,
    html: `
                <h3>Please keep it as secret, don't show to others.<h3/>
                <h3>One Time Pass: ${otp}</h3>
                `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) {
        console.log(error);
        return res.status(400).json({ msg: "Please Try Again", success: false });
      }
      res.status(200).json({ msg: "Success", success: true });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error", success: false });
    }
  });
});

router.post("/verify", async (req, res) => {
  await firedatabase.ref("resume-otp").on("value", (snapshot) => {
    const { otp } = req.body;
    const { otp: serverOTP, maxAge, timestamp } = snapshot.val();
    const now = new Date().getTime();
    if (otp === serverOTP) {
      if (parseInt(now) < parseInt(timestamp) + parseInt(maxAge) * 1000)
        res.status(200).json({ success: true, msg: "OTP Macthed" });
      else res.status(200).json({ success: false, error: "OTP get expired, please key in within 2 minutes. " });
    } else res.status(200).json({ success: false, error: "OTP is not matched" });
  });
});

module.exports = router;
