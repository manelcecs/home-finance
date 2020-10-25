const mongoose = require('mongoose');

const UserModel = mongoose.model('Users');

const createUser = (userDto) => {

    let userToSave = new UserModel(userDto);

    return userToSave.save();

}

const getAllUsers = () => {
    return UserModel.find({});
}

const getUserById = (idUser) => {
    return UserModel.findById(idUser);
}

const getUserByUsername = (username) => {
    return UserModel.find({'user_name': username});
}

const getIfUserLoginValid = (user, userLogin) => {
    return user.password == userLogin.password;
}

const deactivateUser = (idUser) =>{
    return UserModel.findByIdAndUpdate(idUser, {active: false}, {new: true});
}

const activateUser = (idUser) =>{
    return UserModel.findByIdAndUpdate(idUser, {active: true}, {new: true});
}

const deleteUser = (idUSer) =>{
    return UserModel.findByIdAndDelete(idUSer);
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.getUserByUsername = getUserByUsername;
exports.getIfUserLoginValid = getIfUserLoginValid;
exports.deactivateUser = deactivateUser;
exports.activateUser = activateUser;
exports.deleteUser = deleteUser;