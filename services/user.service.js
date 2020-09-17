const mongoose = require('../config/mongoose');

const UserModel = require('../model/user.model').UserModel;

const UserDto = require('../model/user.model').UserDto;

function createUser(userDto){

    let userToSave = new UserModel(userDto);

    UserModel.save(userToSave, function(err){
        if(err){
            console.error.bind(console, 'Error saving user: ')
        }
    });

}