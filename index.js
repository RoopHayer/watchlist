"use strict";

const app = require("./src/server");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const { db } = require("./src/auth/models/index");

db.sync().then(() => {
  // Start the web server
  app.start(PORT);
});
