const mongoose = require('mongoose');
var controller = require('./controller');

const dbURI = 'mongodb://localhost/photoproj'
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('mongoose is connected to', dbURI);
})

mongoose.connection.on('error', function(err) {
  console.warn('mongoose error: ', err);
})