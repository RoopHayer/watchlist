'use strict';

const app = require('./lib/server');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
// const { db } = require('./lib/models')

app.start(PORT)