var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(3000, function() {
  console.log('express is listening on port 3000');
});