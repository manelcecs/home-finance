let express = require('express');
let router = express.Router();

let UserService = require('../services/user.service');

let response = {
    error: false,
    code: 200,
    message: ''
};

router.post('/', function(req, res){
    if(!req.body.user){
        response.error = true;
        response.code = 502;
        response.message = 'User is required to Sing Up';
    }else{
        UserService.createUser(req.body.user);
        response.message = 'User created.';
    }
});