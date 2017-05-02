'use strict';
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Log an error
Mongoose.connection.on('error',error => {
    console.log("mongodb error: ",error);
});

module.exports = {
    Mongoose
};