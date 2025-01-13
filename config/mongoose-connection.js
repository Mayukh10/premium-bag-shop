const mongoose = require('mongoose');
const config = require("config");
const dbgr = require('debug')('development:mongoose');

// Connect to MongoDB using Mongoose
mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(function () {
    dbgr("Connected to MongoDB");
  })
  .catch(function (err) {
    dbgr("Connection error:", err);
  });

// Export the Mongoose connection to use elsewhere in the application
module.exports = mongoose.connection; 