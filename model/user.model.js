const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

//Define user Schema
let UserSchema = new Schema({
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
let UserDto = {
    user_name:String,
    password: String,
    active: Boolean,
    register_date: Date,
    last_login: Date
}

let UserLogin = {
    user_name: String,
    password: String,    
}
//Compile user schema
mongoose.model('Users', UserSchema);

module.exports = UserDto;