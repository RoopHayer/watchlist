"use strict";

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client/build")));

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
};
