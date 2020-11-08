const express = require('express');
const router = express.Router();

const UserService = require('../services/user.service');
const jwt = require('jsonwebtoken');

router.post('/login', function(req, res){
    console.log("User Routes -- login");
    if(req.body.username && req.body.password){
        UserService.getLogin(req.body.username, req.body.password).then(user =>{
            if(user){
                let token = jwt.sign({
                    user: user,
                 }, process.env.JWTkey, {
                 expiresIn: process.env.JWTcad
             });
                res.status(200).json(token);
            }else{
                res.status(400).send('Invalid credentials');
            }
            
        }).catch(err =>{
            res.status(400).send('Invalid credentials.\n'+err);
        });
    }else{
        res.status(500).send('Something went wrong.\n'+'Params was not setted');
    }
});

module.exports = router;