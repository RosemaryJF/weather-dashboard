var APIKey = "f39d9467ef1aba260c6801b3458f906e";
var APIKey2 = "50769607e08ba2d36949b3dcb81ae316"
var userCityEntry;

var searchFormEl = document.getElementById("city-search");
var resultsDisplayEl = $(".results-display")


// $(document).ready(function(citySearch){
function citySearch() {
    $("form").submit(function (event) {
        event.preventDefault();
        // userCityEntry = $("#user-input").val()
        // console.log(userCityEntry);
        // localStorage.setItem("City Search", userCityEntry);

        $("#current-day-result").removeAttr("style");
        $("#five-day-result").removeAttr("style");
        searchHistoryStore()
        returnResultsCurrentDay()
        returnResultsFiveDay()
        returnFiveDayDate()
        return
    })

}
citySearch()


// Function to retrieve current day weather for user city search
function returnResultsCurrentDay() {
    userCityEntry = $("#user-input").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric";
    // &temperature.value=&wind.speed=&humidity.value=&current.uvi="

    fetch(queryURL)
        .then(function (response) {
            // if (!response.ok) {
            return response.json();
            // }
        })

        .then(function (data) {
            console.log(data);

            var cityName = data.name;

            var temperature = data.main.temp;
            var wind = data.wind.speed;
            var humidity = data.main.humidity;
            var weatherIconCode = data.weather[0].icon;
            var weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
            var date = moment().format(" (DD/MM/YYYY) ");


            $("#results-display").append(cityName + date);
            $("#weather-icon").attr("src", weatherIconURL);
            $("#temperature").append("Temp: " + temperature + "\xB0C");
            $("#wind").append("Wind: " + wind + " km/h");
            $("#humidity").append("Humidity: " + humidity + "%");

            // var uvIndexTitle = document.querySelector("#uv-index");
            var uvIndexResult = document.querySelector("#uvIndexResult");
            var longitude = data.coord.lon;
            var latitude = data.coord.lat;

            var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
            fetch(uvIndexURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    var uvIndex = data.value;
                    // $(uvIndexTitle).append("UV Index: ")
                    $(uvIndexResult).append(uvIndex);
                    if (uvIndex < 3) {
                        $(uvIndexResult).css({ "background-color": "green", "color": "#EFEFEF", "font-weight": "bold" });
                    } else if (uvIndex === 3 || uvIndex < 6) {
                        $(uvIndexResult).css({ "background-color": "yellow", "font-weight": "bold" });
                    } else if (uvIndex === 6 || uvIndex < 8) {
                        $(uvIndexResult).css({ "background-color": "orange", "color": "#EFEFEF", "font-weight": "bold" });
                    } else if (uvIndex === 8 || uvIndex < 11) {
                        $(uvIndexResult).css({ "background-color": "red", "color": "#EFEFEF", "font-weight": "bold" });
                    } else if (uvIndex === 11 || uvIndex > 11) {
                        $(uvIndexResult).css({ "background-color": "purple", "color": "#EFEFEF", "font-weight": "bold" });
                    }
                })

        })
}

// Function to generate 5 dates from current day using moment
function returnFiveDayDate() {
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


// Function to store search history
function searchHistoryStore() {
    userCityEntry = $("#user-input").val()
    console.log(userCityEntry);
    localStorage.setItem("City Search", userCityEntry);
    const previousCity = localStorage.getItem("City Search");

    const searchHistoryEl = document.body.createElement("div")
    const previousCityEl = document.body.createElement("span");

    searchHistoryEl.textContent("Previous City")
    previousCityEl.textContent(previousCity)

    body.appendChild(searchHistoryEl)
    searchHistoryEl.appendChild(previousCityEl)

    // searchHistoryEl.document.appendChild(previousCityEl)
    // previousCityEl.document.append(previousCity)
    // searchHistoryEl.append(previousCityEl)
    // previousCityEl.append(previousCity)


    // function addElement() {
    //     // create a new div element
    //     const newSpan = document.createElement("span");

    //     // and give it some content
    //     const newContent = document.createTextNode(previousCity);

    //     // add the text node to the newly created div
    //     newSpan.appendChild(newContent);

    //     // add the newly created element and its content into the DOM
    //     const currentDiv = document.getElementById("search-history");
    //     document.insertAfter(newSpan, currentDiv);
    // }

    // addElement()
    // document.getElementsByClassName("previousCity").value = previousCity;

    // $("div #search-history").add("span").addClass("previousCity");
    // $(".prevousCity").attr(previousCity)
    // .css({"background-color": "#D1D1D1", "color": "#000000"});
    // $("#previous-search").attr(userCityEntry);
}

// Function to return 5 day weather result for currently searched city
function returnResultsFiveDay() {
    userCityEntry = $("#user-input").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.list)
            var fiveDayForecastEls = document.querySelectorAll(".five-day");
            for (i = 0; i < fiveDayForecastEls.length; i++) {
                fiveDayForecastEls[i].innerHTML = "";

                var forecastIndex = i + 4;
                // console.log(forecastIndex)
                var weatherIconCode = (data.list[forecastIndex].weather[0].icon);
                console.log(weatherIconCode);
                var weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
                console.log(weatherIconURL)
                $(this).attr("src", weatherIconURL);

                var futureForecastTemperature = (data.list[forecastIndex].main.temp);
                var futureForecastWind = (data.list[forecastIndex].wind.speed);
                var futureForecastHumidity = (data.list[forecastIndex].main.humidity);
                var dayOne = moment().add(1, "day").format("DD/MM/YYYY");

                $("#first-day").prepend(dayOne);
                $("#first-day").append(
                    "<br>" + "<br>" + "Temp: " +
                    futureForecastTemperature +
                    "<br>" + "<br>" + "Wind: " +
                    futureForecastWind +
                    "<br>" + "<br>" + "Humidity: " +
                    futureForecastHumidity);


                forecastIndex = i + 12;
                weatherIconCode = (data.list[forecastIndex].weather[0].icon);
                weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
                futureForecastTemperature = (data.list[forecastIndex].main.temp);
                futureForecastWind = (data.list[forecastIndex].wind.speed);
                futureForecastHumidity = (data.list[forecastIndex].main.humidity);

                $("#weather-icon-second").attr("src", weatherIconURL);
                $("#second-day").append(
                    "<br>" + "Temp: " +
                    futureForecastTemperature +
                    "<br>" + "<br>" + "Wind: " +
                    futureForecastWind +
                    "<br>" + "<br>" + "Humidity: " +
                    futureForecastHumidity);

                forecastIndex = i + 20;
                weatherIconCode = (data.list[forecastIndex].weather[0].icon);
                weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
                futureForecastTemperature = (data.list[forecastIndex].main.temp);
                futureForecastWind = (data.list[forecastIndex].wind.speed);
                futureForecastHumidity = (data.list[forecastIndex].main.humidity);

                $("#weather-icon-third").attr("src", weatherIconURL);
                $("#third-day").append(
                    "<br>" + "Temp: " +
                    futureForecastTemperature +
                    "<br>" + "<br>" + "Wind: " +
                    futureForecastWind +
                    "<br>" + "<br>" + "Humidity: " +
                    futureForecastHumidity);

                forecastIndex = i + 28;
                weatherIconCode = (data.list[forecastIndex].weather[0].icon);
                weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
                futureForecastTemperature = (data.list[forecastIndex].main.temp);
                futureForecastWind = (data.list[forecastIndex].wind.speed);
                futureForecastHumidity = (data.list[forecastIndex].main.humidity);

                $("#weather-icon-fourth").attr("src", weatherIconURL);
                $("#fourth-day").append(
                    "<br>" + "Temp: " +
                    futureForecastTemperature +
                    "<br>" + "<br>" + "Wind: " +
                    futureForecastWind +
                    "<br>" + "<br>" + "Humidity: " +
                    futureForecastHumidity);

                forecastIndex = i + 36;
                weatherIconCode = (data.list[forecastIndex].weather[0].icon);
                weatherIconURL = "http://openweathermap.org/img/wn/" + weatherIconCode + ".png"
                futureForecastTemperature = (data.list[forecastIndex].main.temp);
                futureForecastWind = (data.list[forecastIndex].wind.speed);
                futureForecastHumidity = (data.list[forecastIndex].main.humidity);

                $("#weather-icon-fifth").attr("src", weatherIconURL);
                $("#fifth-day").append(
                    "<br>" + "Temp: " +
                    futureForecastTemperature +
                    "<br>" + "<br>" + "Wind: " +
                    futureForecastWind +
                    "<br>" + "<br>" + "Humidity: " +
                    futureForecastHumidity);
                return
            }
        })
}

