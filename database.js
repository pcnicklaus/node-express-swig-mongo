var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// you always start with defining the schema,
var Superhero = new Schema(
  { name : String }
);
// linked it to collection called "superheros"
mongoose.model('superheros', Superhero);

// we opened a connection to an instance of our local MongoDB.
mongoose.connect('mongodb://localhost/node-superhero');
