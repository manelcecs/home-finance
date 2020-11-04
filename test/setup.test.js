
require('../model/user.model');
require('../model/saving.model');

require('../config/security/index');

const mongoose = require('mongoose');

const dbUri = process.env.dbURItest;
const dbUriRead = Buffer.from(dbUri, 'base64').toString();

const setUp = () =>{
    before(async () =>{
        
        await mongoose.connect(dbUriRead, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }, (err)=>{
            if(err){
                console.log(err);
                process.exit(1);
            }
        });
    
    });
}


module.exports = setUp;
