'use strict';
const mongose = require('mongoose');
//const dbURI = atob();

mongose.connect( 'mongodb+srv://admin:admin@sandbox-cluster.dvouy.mongodb.net/home-finance?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongose.Promise = global.Promise;

//Load models
require('../../model/user.model');


let db = mongose.connection;
console.log("Models:", db.models);

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;