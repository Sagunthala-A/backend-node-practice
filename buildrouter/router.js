const express = require("express");
const {loginController,registerController} = require('./controller');

const router = express.Router();

// /auth/login
router.get("/login", loginController);

// /auth/register
router.get("/register", registerController);


module.exports = router;
