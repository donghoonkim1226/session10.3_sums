var zipcode = process.argv.slice(2)
var request = require("request");

request('http://api.openweathermap.org/data/2.5/weather?zip='+ zipcode + ',us&appid=2de143494c0b295cca9337e1e96b00e0', function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	body = JSON.parse(body);
  	var temp = (parseFloat(body.main.temp) - 273.15) * 1.8000 + 32.00;
  	console.log(temp);
  	if(temp < 45){
  		request("http://www.omdbapi.com/?t=sad+movie&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	} else if (temp >= 45 && temp <= 60) {
  		request("http://www.omdbapi.com/?t=norwegian+ninja&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	} else {
  		request("http://www.omdbapi.com/?t=the+terminator&y=&plot=short&r=json", function (error, response, body){
  			console.log(body);
  		});
  	}

  }
})