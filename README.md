# weather-dashboard

https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys
https://openweathermap.org/api/one-call-api
https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon

``$(document).ready(function(citySearch){

    $("form").submit(function (event) {
        event.preventDefault();
        var userCityEntry = $(".user-input").val()
        // to $("#user-input")
        console.log(userCityEntry);
        localStorage.setItem("City Search", userCityEntry);
    });

    citySearch()
``