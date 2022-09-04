var APIKey = "f39d9467ef1aba260c6801b3458f906e";
var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric";

fetch(queryURL)