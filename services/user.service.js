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
    return UserModel.findOne({'user_name': username});
}

const getLogin = (user, password) => {
    
    return getUserByUsername(user).then(userDB => {
        if(password === userDB.password){
            return UserModel.findByIdAndUpdate(userDB.id, {last_login: new Date()}, {new: true}).then(userSaved =>{
                return userSaved;
            });
        }
    }).catch(err=>{
        console.log(`Error. ${err}`);
        return undefined;
    });
    
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
exports.getLogin = getLogin;
exports.deactivateUser = deactivateUser;
exports.activateUser = activateUser;
exports.deleteUser = deleteUser;