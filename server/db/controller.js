const Photo = require('./model.js');
const path = require('path');

var corgiPhoto = {
  title: 'corgi',
  filepath: path.join(__dirname, '../client/public/images/corgi.jpg'),
  rating: 0
}

Photo.create(corgiPhoto, function(err, data) {
  if (err) {
    console.warn(err);
  } else {
    console.log(data);
  }
});