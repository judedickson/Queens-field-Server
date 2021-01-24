var express = require('express');
var controller = require('../controllers/user.controller.ts');
var off_controller = require('../controllers/offline_user.controller.ts');
var userModel = require('../models/user.model');

var router = express.Router();

router.route('/news').get(off_controller.homeNews);

router.route('/aboutAcademic').get(off_controller.aboutAcademic);

router.route('/register').get(controller.register);

router.route('/').get((req, res)=>{
    res.status(200).json("welcome to schoolboy");
});

router.route('/login').get((req,res)=>{
    res.send("we are the boys");
});

module.exports = router;