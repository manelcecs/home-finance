const mongoose = require('mongoose');

const UserModel = mongoose.model('Users');

let createUser = (userDto) => {

    let userToSave = new UserModel(userDto);

    return userToSave.save();

}

let getAllUsers = () => {
    return UserModel.find({}).exec();
}

let getUserById = (idUser) => {
    return UserModel.findById(idUser).exec();
}

let getUserByUsername = (username) => {
    console.log("Searching user: ", username);
    return UserModel.find({'user_name': username}).exec();
}

let getIfUserLoginValid = (user, userLogin) => {
    return user.password == userLogin.password;
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.getUserByUsername = getUserByUsername;
exports.getIfUserLoginValid = getIfUserLoginValid;