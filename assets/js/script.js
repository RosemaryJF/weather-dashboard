var APIKey = "f39d9467ef1aba260c6801b3458f906e";
// var city;

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=metric";

// fetch(queryURL)

var searchFormEl = document.getElementById("city-search");


$(document).ready(function(citySearch){

    $("form").submit(function (event) {
        event.preventDefault();
        var userCityEntry = $("#user-input").val()
        console.log(userCityEntry);
        localStorage.setItem("City Search", userCityEntry);

        $("#search-history").text(userCityEntry);
    });

    citySearch()
});





  