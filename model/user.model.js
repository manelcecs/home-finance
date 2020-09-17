const mongoose = require('../config/mongoose');

const Schema = mongoose.Schema;

//Define user Schema
let UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user_name: {
        type: String,
        required: [true, 'How will I know who you are?']
    },
    password: {
        type: String,
        required: [true, 'How will I know if you are really you?']
    },
    active: Boolean,
    register_date: Date,
    last_login: Date
});

//Data Transfer Object of User
let UserDto = {
    user_name:String,
    password: String,
    active: Boolean,
    register_date: Date,
    last_login: Date
}

//Compile user schema
let UserModel = mongoose.model('User', UserSchema);

module.exports = UserDto;
module.exports = UserModel;