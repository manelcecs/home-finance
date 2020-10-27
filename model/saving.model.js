const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const SavingSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new ObjectId(),
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    amount: {
        type: Number,
        default: 0,
    }
});

mongoose.model('Savings', SavingSchema);
