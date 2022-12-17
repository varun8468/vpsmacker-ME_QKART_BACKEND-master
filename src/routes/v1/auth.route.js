const express = require("express");
const validate = require("../../middlewares/validate");
const authValidation = require("../../validations/auth.validation");
const {register, login} = require("../../controllers/auth.controller");
const authController = require("../../controllers/auth.controller");


const router = express.Router();
router.post('/register', validate(authValidation.register), register );
router.post('/login', validate(authValidation.login), login );





module.exports = router;
