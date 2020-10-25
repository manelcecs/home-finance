let express = require('express');
let router = express.Router();

let UserService = require('../services/user.service');

router.post('/', function(req, res){
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
    UserService.getAllUsers().then(users=>
        res.status(200).send(users)
    ).catch(err=>
        res.status(500).send('Something went wrong.\n'+err)
    );
    
});

router.get('/:username', function(req, res){
    console.log("Llamada controlador user -- getByUserName");
    UserService.getUserByUsername(req.params.username).then(user=>
        res.status(200).send(user)
    ).catch(err=>
        res.status(500).send('Something went wrong.\n'+err)
    );
});

router.get('/id/:id', function(req, res){
    console.log("Llamada controlador user -- getUserById");
    UserService.getUserById(req.params.id).then(user=>
        res.status(200).send(user)
    ).catch(err=>
        res.status(500).send('Something went wrong.\n'+err)
    );
});

module.exports = router;