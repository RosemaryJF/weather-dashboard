var APIKey = "f39d9467ef1aba260c6801b3458f906e";
var APIKey2 = "50769607e08ba2d36949b3dcb81ae316"
var userCityEntry;

var searchFormEl = document.getElementById("city-search");
var resultsDisplayEl = $(".results-display")


// $(document).ready(function(citySearch){
function citySearch () {
    $("form").submit(function (event) {
        event.preventDefault();
        userCityEntry = $("#user-input").val()
        console.log(userCityEntry);
        localStorage.setItem("City Search", userCityEntry);

        $("#search-history").text(userCityEntry);
        returnResultsCurrentDay()
        returnResultsFiveDay()
        returnFiveDayDate()
        return
    })
    
}
citySearch()


// Function to retrieve current day weather for user city search
function returnResultsCurrentDay () {
    userCityEntry = $("#user-input").val()
    var queryURL =  "https://api.openweathermap.org/data/2.5/weather?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric";
    // &temperature.value=&wind.speed=&humidity.value=&current.uvi="

    fetch(queryURL)
        .then(function (response) {
                return response.json();
            })

        .then (function(data) {

            console.log(data);

            var cityName = data.name;
            
            var temperature = data.main.temp;
            var wind = data.wind.speed;
            var humidity = data.main.humidity;
            var uvIndex = data.uvi;
            var weatherIconCode = data.weather[0].icon;
            var weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
            var date = moment().format(" (DD/MM/YYYY) ");

        
            $("#results-display").append(cityName + date);
            $("#weather-icon").attr("src", weatherIconURL);
            $("#temperature").append("Temp: " + temperature + "\xB0C");
            $("#wind").append("Wind: " + wind + " km/h");
            $("#humidity").append("Humidity: " + humidity + "%");
            $("#uv-index").append("UV Index: " + uvIndex);

            // var longitude = data.coord.lon;
            // var latitude = data.coord.lat;

            // var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lon=" + longitude + "&lat=" + latitude + APIKey +"&cnt=1";
            // fetch(uvIndexURL)
            //     .then(function (response) {
            //         return response.json();
            //     })
            //     .then(function (data) {
            //         console.log(data);
            //     })

        })
}

// Function to generate 5 dates from current day using moment
function returnFiveDayDate () {
    var dayOne = moment().add(1, "day").format("DD/MM/YYYY");
    var dayTwo = moment().add(2, "days").format("DD/MM/YYYY");
    var dayThree = moment().add(3, "days").format("DD/MM/YYYY");
    var dayFour = moment().add(4, "days").format("DD/MM/YYYY");
    var dayFive = moment().add(5, "days").format("DD/MM/YYYY");
    
    $("#first-day").prepend(dayOne);
    $("#second-day").prepend(dayTwo);
    $("#third-day").prepend(dayThree);
    $("#fourth-day").prepend(dayFour);
    $("#fifth-day").prepend(dayFive);
}


function returnResultsFiveDay () {
    userCityEntry = $("#user-input").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric";
    fetch(queryURL)
        .then(function (response) {
                return response.json();
            })
        .then(function (data){
            console.log(data.list)
            var fiveDayForecastEls = document.querySelectorAll(".five-day");
            for (i = 0; i < fiveDayForecastEls.length; i++) {
                fiveDayForecastEls[i].innerHTML = "";
                
                var forecastIndex = i + 4;
                console.log(forecastIndex)
                // var futureForecastTemperature = (data.list[forecastIndex].main.temp);
                var futureForecastTemperature = (data.list[forecastIndex].main.temp);
                var futureForecastWind = (data.list[forecastIndex].wind.speed);
                var futureForecastHumidity = (data.list[forecastIndex].main.humidity);
                var dayOne = moment().add(1, "day").format("DD/MM/YYYY");
            
                        
                $("#first-day").append( 
                    dayOne +
                    "</br>" + "Temp: " +
                    futureForecastTemperature + 
                    "</br>" + "Wind: " +
                    futureForecastWind + 
                    "</br>" + "Humidity: " +
                    futureForecastHumidity);

                forecastIndex = i + 12;
                    futureForecastTemperature = (data.list[forecastIndex].main.temp);
                    futureForecastWind = (data.list[forecastIndex].wind.speed);
                    futureForecastHumidity = (data.list[forecastIndex].main.humidity);

                    $("#second-day").append( 
                        "</br>" + "Temp: " +
                        futureForecastTemperature + 
                        "</br>" + "Wind: " +
                        futureForecastWind + 
                        "</br>" + "Humidity: " +
                        futureForecastHumidity);

                forecastIndex = i + 20;
                    futureForecastTemperature = (data.list[forecastIndex].main.temp);
                    futureForecastWind = (data.list[forecastIndex].wind.speed);
                    futureForecastHumidity = (data.list[forecastIndex].main.humidity);
    
                    $("#third-day").append( 
                        "</br>" + "Temp: " +
                        futureForecastTemperature + 
                        "</br>" + "Wind: " +
                        futureForecastWind + 
                        "</br>" + "Humidity: " +
                        futureForecastHumidity);

                forecastIndex = i + 28;
                    futureForecastTemperature = (data.list[forecastIndex].main.temp);
                    futureForecastWind = (data.list[forecastIndex].wind.speed);
                    futureForecastHumidity = (data.list[forecastIndex].main.humidity);
        
                    $("#fourth-day").append( 
                        "</br>" + "Temp: " +
                        futureForecastTemperature + 
                        "</br>" + "Wind: " +
                        futureForecastWind + 
                        "</br>" + "Humidity: " +
                        futureForecastHumidity);

                forecastIndex = i + 36;
                    futureForecastTemperature = (data.list[forecastIndex].main.temp);
                    futureForecastWind = (data.list[forecastIndex].wind.speed);
                    futureForecastHumidity = (data.list[forecastIndex].main.humidity);
    
                    $("#fifth-day").append( 
                        "</br>" + "Temp: " +
                        futureForecastTemperature + 
                        "</br>" + "Wind: " +
                        futureForecastWind + 
                        "</br>" + "Humidity: " +
                        futureForecastHumidity);
                return
            }
        })
}

