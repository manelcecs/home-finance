const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

//Define user Schema
const UserSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: new ObjectId(),
    },
    user_name: {
        type: String,
        required: [true, 'How will I know who you are?']
    },
    password: {
        type: String,
        required: [true, 'How will I know if you are really you?']
    },
    active:{
        type:Boolean,
        default: true,
    },
    register_date: {
        type: Date,
        default: new Date()
    },
    last_login: {
        type: Date,
        default: new Date()
    }
});

//Data Transfer Object of User
const UserDto = {
    user_name:String,
    password: String,
    active: Boolean,
    register_date: Date,
    last_login: Date
}

const UserLogin = {
    user_name: String,
    password: String,    
}
//Compile user schema
mongoose.model('Users', UserSchema);

module.exports = UserDto;