'use strict';
const mongose = require('mongoose');

mongose.connect('mongodb://localhost:27017/home-finance', { useNewUrlParser: true, useUnifiedTopology: true });

mongose.Promise = global.Promise;

let db = mongose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;