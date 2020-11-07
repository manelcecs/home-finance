const mongoose = require('mongoose');

const SavingModel = mongoose.model('Savings');

const getSavingOfUser = (userId) =>{

    return SavingModel.find({'user': userId});

}

const createSaving = (userId, amount) =>{
    const newSaving = new SavingModel({_id: new mongoose.Types.ObjectId(), user: userId, amount: amount});

    return newSaving.save().then(saving => {
        return saving;
    }).catch(err =>
        console.log(`Error: ${err}`)
    );
}

exports.getSavingOfUser = getSavingOfUser;
exports.createSaving = createSaving;