'use strict';
const mongose = require('mongoose');
const dbUri = process.env.profile === 'dev' ? process.env.dbURI : process.env.dbURItest;

const dbUriRead = Buffer.from(dbUri, 'base64').toString();

mongose.connect(dbUriRead, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

mongose.Promise = global.Promise;

//Load models
require('../../model/user.model');
require('../../model/saving.model');

let db = mongose.connection;
//console.log("Models:", db.models);

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db.db;