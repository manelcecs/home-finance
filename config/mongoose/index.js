'use strict';
const mongose = require('mongoose');
let dbUriRead= Buffer.from('bW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBzYW5kYm94LWNsdXN0ZXIuZHZvdXkubW9uZ29kYi5uZXQvaG9tZS1maW5hbmNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ==', 'base64').toString();

mongose.connect(dbUriRead, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

mongose.Promise = global.Promise;

//Load models
require('../../model/user.model');


let db = mongose.connection;
console.log("Models:", db.models);


db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db.db;