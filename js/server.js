var express = require('express');
var expedia = require(__dirname + '/index');
var app = express();


app.listen(process.env.PORT || 2999, function() {
  console.log('listening on port 2999');
});

//expedia.flights();
//expedia.cars();
expedia.hotels();