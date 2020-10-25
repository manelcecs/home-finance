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
    if(req.params.username){
        UserService.getUserByUsername(req.params.username).then(user=>
            res.status(200).send(user)
        ).catch(err=>
            res.status(500).send('Something went wrong.\n'+err)
        );
    }else{
        res.status(500).send('Something went wrong.\n'+'Param was not setted');
    }
    
});

router.get('/id/:id', function(req, res){
    console.log("Llamada controlador user -- getUserById");
    if(req.params.id){
        UserService.getUserById(req.params.id).then(user=>
            res.status(200).send(user)
        ).catch(err=>
            res.status(500).send('Something went wrong.\n'+err)
        );
    }else{
        res.status(500).send('Something went wrong.\n'+'Param was not setted');
    }
    
});

router.put('/deactivate/:id', function(req, res){
    console.log("User Routes -- deactivate user");
    if(req.params.id){
        UserService.deactivateUser(req.params.id).then(user =>{
            if(user.active){
                res.status(200).send('User cannot be deactivate');
            }else{
                res.status(200).send('User was deactivate');
            }
        }).catch(err =>
            res.status(500).send('Something went wrong.\n'+err)
        )
    }else{
        res.status(500).send('Something went wrong.\n'+'Param was not setted');
    }
    
});

router.put('/activate/:id', function(req, res){
    console.log("User Routes -- activate user");
    if(req.params.id){
        UserService.activateUser(req.params.id).then(user =>{
            if(user.active){
                res.status(200).send('User was activate');
            }else{
                res.status(200).send('User cannot be activate');
            }
        }).catch(err =>
            res.status(500).send('Something went wrong.\n'+err)
        )
    }else{
        res.status(500).send('Something went wrong.\n'+'Param was not setted');
    }
    
});

router.delete('/delete/:id', function(req, res){
    console.log("User Routes -- delete user");
    if(req.params.id){
        UserService.deleteUser(req.params.id).then(()=>{
            res.status(200).send("User was deleted")
        }).catch(err =>
            res.status(500).send('Something went wrong.\n'+err)
        )
    }else{            
        res.status(500).send('Something went wrong.\n'+'Param was not setted');
    }
});

module.exports = router;