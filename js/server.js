var express = require('express');
///var expredia_request = require(__dirname + '/expedia_api');
var app = express();


app.listen(process.env.PORT || 2999, function() {
  console.log('listening on port 2999');
});

//expredia_request();