var express = require('express');
var path = require('path');
var app = express();
var db = require('./db/db')

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(3000, function() {
  console.log('express is listening on port 3000');
});

