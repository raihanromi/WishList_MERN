//Have to add user functionality to the server

const express = require("express");
const router = express.Router();
const { newUser, allUser } = require("../controller/userController");

router.post("/newuser", newUser);

router.get("/allUser", allUser);

module.exports = router;
