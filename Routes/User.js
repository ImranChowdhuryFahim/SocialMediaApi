const express = require('express');

const controller = require('../Controllers/User');

const router = express.Router();

router.route('/register').post(controller.Register);
router.route('/getAllusers').get(controller.getUsers);
router.route('/login').post(controller.Login);

module.exports = router;
