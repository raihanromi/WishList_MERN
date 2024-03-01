//TODO: add user functionality to the server
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
// const { v4: uuidv4 } = require("uuid");
// const {
//   setUserSessionId,
//   getUserSessionId,
// } = require("../services/saveUserInformation");

//save new user in the DB
const newUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const userinformation = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    await userinformation.save();
    res.send(userinformation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//verify user login
const checkUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const verifyuser = await User.findOne({ email });
  if (verifyuser) {
    const validPassword = await bcrypt.compare(password, verifyuser.password);
    if (validPassword) {
      const {password,...other} = verifyuser._doc
      res.status(200).json(other)
      // const sessionId = uuidv4();
      // setUserSessionId(sessionId, verifyuser.email);
      // const user = getUserSessionId(sessionId);
      // console.log(user);
      //console.log(sessionId)
    } else {
      console.log("wrong password");
      res.send("wrong password");
    }
  } else {
    res.send("not a user ");
  }
};


//get all user from the DB
const allUser = async (req, res) => {
  const alluser = await User.find({});
  res.send(alluser);
};

module.exports = { newUser, allUser, checkUser };
