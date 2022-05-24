"use strict";

const { connect, connection } = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/mongoSocialNetworkDB';

connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = connection;