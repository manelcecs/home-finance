const mongoose = require('mongoose');

const SavingModel = mongoose.model('Savings');

const getSavingOfUser = (userId) =>{

    return SavingModel.find({'user': userId});

}

const updateSaving = (saving) =>{
    return SavingModel.findByIdAndUpdate(saving._id, {amount: saving.amount}, {new: true});
}

exports.getSavingOfUser = getSavingOfUser;
exports.updateSaving = updateSaving;