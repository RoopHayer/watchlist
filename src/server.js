"use strict";

const express = require("express");
const cors = require("cors");
const path = require("path");
const errorHandler = require("./error-handlers/500.js");
const notFound = require("./error-handlers/404.js");
const authRoutes = require("./auth/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(authRoutes);
app.use(notFound);
app.use(errorHandler);
module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
};
