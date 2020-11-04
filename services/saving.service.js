const mongoose = require('mongoose');

const SavingModel = mongoose.model('Savings');

const getSavingOfUser = (userId) =>{

    return SavingModel.find({'user': userId});

}

exports.getSavingOfUser = getSavingOfUser;
