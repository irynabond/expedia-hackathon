
var request = require('request');

module.exports = {
	flights: function flight_search () {
		request("http://terminal2.expedia.com:80/x/mflights/search?departureDate=2016-02-18&departureAirport=SEA&arrivalAirport=ABR&prettyPrint=true&&maxOfferCount=2&apikey=TkefBxxLZbMGgOvKRGFLIkYJxcB3bYtA", function (error, res, body) {
	    var obj = JSON.parse(res.body);
	    var results = obj.offers;
	    for (var i = 0; i<results.length; i++) {
	    	console.log (results[i].baseFarePrice.formattedWholePrice);
	    }
	 	});
	},
	cars: function cars_search () {
		request("http://terminal2.expedia.com/x/cars/search?pickupdate=2016-03-21T10:00&dropoffdate=2016-03-28T16:30&pickuplocation=LAX&dropofflocation=LAX&sort=price&limit=2&apikey=PxOSAzW4pRSLSJSVYnuQQoAQNPGGBWOV", function (error, res, body) {
	    var obj = JSON.parse(res.body);
	    var results = obj.CarInfoList.CarInfo;
	    for (var i = 0; i<results.length; i++) {
	    	console.log (results[i].Price.TotalRate.Value);
	    }
	 	});
	},
	hotels: function hotels_search () {
		request("http://terminal2.expedia.com:80/x/hotels?maxhotels=3&location=47.6063889%2C-122.3308333&radius=5km&checkInDate=2016-02-10&checkOutDate=2016-02-11&adults=2&sort=price&apikey=eybaWjYnCYzAAEnywJyvOZ5W1LsmAtHu", function (error, res, body) {
	    var obj = JSON.parse(res.body);
	    var results = obj.HotelInfoList.HotelInfo;
	    for (var i = 0; i<results.length; i++) {
	    	console.log (results[i].Price.TotalRate.Value);
	    }
	 	});
	}
};
