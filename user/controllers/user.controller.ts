var userModel = require('../models/user.model');

var aboutAcademic = (req, res)=>{
    res.json("we rule");
}


var register = (req, res)=>{
    var newUser = new userModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    newUser.save()
        .then((result) => {
            res.json('Account Created Successfully');
        })
        .catch((err) => {
            res.json('Account Not Created');
        });
}

var registerPage = (req, res)=>{
}

var error404Handler = (req, res)=>{
    res.send("Page Not Found");
}

module.exports = {
    register: register,
    error404: error404Handler,
};