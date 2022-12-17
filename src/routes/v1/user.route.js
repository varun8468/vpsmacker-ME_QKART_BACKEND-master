const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const auth = require("../../middlewares/auth");
const User = require('../../models/user.model');
const {getUser, getUserWithEmail, postUser} = require("../../controllers/user.controller")

const router = express.Router();

 const validateUser = validate(userValidation.getUser);
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`

// router.get('/', getUserWithEmail);

router.get('/:userId', auth, validateUser, getUser);

router.post('/', postUser);

router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
