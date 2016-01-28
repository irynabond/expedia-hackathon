var requester = require('request');

module.exports = function expedia_api (){
 requester("", function (err, data) {
        if (err) console.log(err);
        console.log (data.body);
    });
};
//http://api.eventful.com/json/events/search?c=music&l=Seattle&app_key=C5VJScp667pVNMHB&keywords=childish+gambino"