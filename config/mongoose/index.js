'use strict';
const mongose = require('mongoose');
let dbUriRead= Buffer.from(process.env.dbURI, 'base64').toString();

mongose.connect(dbUriRead, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

mongose.Promise = global.Promise;

//Load models
require('../../model/user.model');

let db = mongose.connection;
console.log("Models:", db.models);

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db.db;