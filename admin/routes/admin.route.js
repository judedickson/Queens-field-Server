var express = require('express');
var controller = require('../controllers/admin.controller.ts');

var router = express.Router();

router.route('/login').get(controller.loginPage);

router.route('/').get((req, res)=>{
    res.redirect('/admin/login');
});


module.exports = router;