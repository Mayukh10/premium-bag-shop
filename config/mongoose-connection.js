const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose
  .connect('mongodb://127.0.0.1:27017/scatch')
  .then(function(){
    console.log('Connected to MongoDB');
  })
  .catch(function(err) {
    console.log('Connection error:', err);
  });

// Export the Mongoose connection to use elsewhere in the application
module.exports = mongoose.connection;
