const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const SavingSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new ObjectId(),
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
        index: true,
    },
    amount: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: new Date(),
    }
});

mongoose.model('Savings', SavingSchema);
