
var Requester = require('requester'),
requester = new Requester({debug: 1});

module.exports = function expedia_api (){
	requester.get("http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-18&departureAirport=SEA&arrivalAirport=ABR&prettyPrint=true&apikey=TkefBxxLZbMGgOvKRGFLIkYJxcB3bYtA", function (body) {
    console.log (this.statusCode, body);
 	});
};
