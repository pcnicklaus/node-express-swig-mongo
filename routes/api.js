
var express = require('express');
var router = express.Router();

// require mongoose as well as superheros model
var mongoose = require('mongoose');
var Superhero = mongoose.model('superheros');

router.get('/superheros', function(req, res) {
  Superhero.find(function(err, superheros){
    console.log(superheros);
    res.render(
      'api',
      {title : 'Superhero API', superheros : superheros}
    );
  });
});

router.post('/superheros', function(req, res) {
  new Superhero({name : req.body.name})
  .save(function(err, superhero) {
    console.log(superhero);
    res.redirect('/api/superheros');
  });
});

router.get('/superhero/:name', function(req, res) {
  var query = {"_id": req.params.name};
  Superhero.findOne(query, function(err, superhero){
    console.log(superhero);
    res.render(
      'superhero',
      {title : 'Superhero API - ' + superhero.name, superhero : superhero}
    );
  });
});

module.exports = router;
