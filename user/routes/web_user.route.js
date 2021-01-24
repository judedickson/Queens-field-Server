var express = require('express');

var userController = require('../controllers/user.controller.ts');

var router = express.Router();

router.route('/').get((req, res)=>{
    res.status(200).json("welcome to schoolboy");
});

router.route('*').get(userController.error404);


router.route('/register').post(userController.register);

router.route('/login').get()

module.exports = router;