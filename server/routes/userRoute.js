//Have to add user functionality to the server

const express = require("express");
const router = express.Router();
const { newUser, allUser,checkUser } = require("../controller/userController");

//add new user route
router.post("/newuser", newUser);

//verify the user
router.post("/checkuser",checkUser)


//get all user information 
router.get("/allUser", allUser);

module.exports = router;
