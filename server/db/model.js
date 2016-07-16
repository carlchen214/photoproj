const mongoose = require('mongoose');
const path = require('path');

var Schema = mongoose.Schema;

var photoSchema = new Schema({
  title: String,
  filepath: String, 
  rating: Number
})

module.exports = mongoose.model('Photo', photoSchema);




// corgiPhoto.save(function(err) {
//   if (err) {
//     console.warn('error in saving photo', err); 
//   } else {
//     console.log('saved photo successfully');
//   }
// });
// module.exports.Photo = Photo;