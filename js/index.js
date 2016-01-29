
var request = require('request');

module.exports = function expedia_api (){
	request("http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-18&departureAirport=SEA&arrivalAirport=ABR&prettyPrint=true&&maxOfferCount=2&apikey=TkefBxxLZbMGgOvKRGFLIkYJxcB3bYtA", function (error, res, body) {
    var obj = JSON.parse(res.body);
    var results = obj.offers;
    for (var i = 0; i<results.length; i++) {
    	console.log (results[i].baseFarePrice.formattedWholePrice);
    }
 	});
};
