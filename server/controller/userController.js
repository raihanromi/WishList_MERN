//Have to add user functionality to the server
const User = require("../models/userModel");

const newUser = async (req, res) => {
  try {
    const userinformation = await User.create(req.body);
    res.send(userinformation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const allUser = async (req, res) => {
  const alluser = await User.find({});
  res.send(alluser);
};

module.exports = { newUser, allUser };
