//third parti libraries and modules
const express = require("express");

//custom libraries and modules
const { register } = require("../controller");

//initialize the router
const router = express.Router();

//routes
//register a new user
router.post("/register", register);

module.exports = router;
