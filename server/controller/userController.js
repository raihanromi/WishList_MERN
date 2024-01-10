//Have to add user functionality to the server
const User = require("../models/userModel");


//save new user in the DB
const newUser = async (req, res) => {
  try {
    const userinformation = await User.create(req.body);
    res.send(userinformation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//verify user login 

const checkUser = async ( req,res ) =>{
  const email = req.body.email
  const password = req.body.password
  const verifyuser = await User.findOne({email})
  if(verifyuser){
  res.send(verifyuser)
  
  }else{
    res.send("not a user ")
  }

}



//get all user from the DB
const allUser = async (req, res) => {
  const alluser = await User.find({});
  res.send(alluser);
};

module.exports = { newUser, allUser ,checkUser};
