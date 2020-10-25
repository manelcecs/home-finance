let express = require('express');
let router = express.Router();

let UserService = require('../services/user.service');

router.post('/', function(req, res){
    console.log("Llamada controlador user -- Create");
    console.log("Request:", JSON.stringify(req.body));
    if(!req.body.user){
        console.error.bind(console, 'Error saving user: ');
        res.status(400).send('No user was provided');
    }else{
        UserService.createUser(req.body.user).then(user =>
                res.status(200).send('User created')
        ).catch(err =>
            res.status(500).send('Something went wrong.\n'+err)
        );        
    }
});

router.get('/', function(req, res){
    console.log("Llamada controlador user -- getAll");
    res.status(200).send(UserService.getAllUsers());
});

router.get('/:username', function(req, res){
    console.log("Llamada controlador user -- getByUserName");
    res.status(200).send(UserService.getUserByUsername(req.params.username));
});

module.exports = router;