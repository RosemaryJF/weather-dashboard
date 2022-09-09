var APIKey = "f39d9467ef1aba260c6801b3458f906e";
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
        // displayResults()
    })
}

citySearch()

    
function returnResultsCurrentDay () {
    userCityEntry = $("#user-input").val().toLowerCase()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric&temperature.value=&wind.speed=&humidity.value=&current.uvi=";
    fetch(queryURL)
        .then(function (response) {
                return response.json();
            })

        .then (function(data) {
            console.log(data)
            console.log(data.main.temp)
            console.log(data.wind.speed)
            console.log(data.main.humidity)
            console.log(data.uvi)

            var cityName = data.name
            var temperature = data.main.temp
            var wind = data.wind.speed
            var humidity = data.main.humidity
            var uvIndex = data.uvi
        
            $(".results-display").append("h2");
            $("h2").append(cityName);
            $(".results-display").append(".ul");
            $("ul").append("li");
            $("li").append(
                temperature,
                wind,
                humidity,
                uvIndex
            )
            // results.appendChild(resultsDisplayEl);
            // results.appendChild(cityName);
            // results.appendChild(temperature);
            // results.appendChild(wind);
            // results.appendChild(humidity);
            // results.appendChild(uvIndex);
            // displayResults()
        
        
        
        // .then(function (data) {
        //     for (var i=0; i < data.length; i++) {
        //         console.log(data[i])
                // console.log(data[i].name)
                // console.log(data[i].main.temp)
                // console.log(data[i].wind.speed)
                // console.log(data[i].main.humidity)
                // console.log(data[i].uvi)
                    
            })
        }
//         })
// }
function returnResultsFiveDay () {
    userCityEntry = $("#user-input").val().toLowerCase()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCityEntry + "&cnt=960&appid=" + APIKey + "&units=metric&temperature.value=&wind.speed=&humidity.value=&current.uvi=";
    fetch(queryURL)
        .then(function (response) {
                return response.json();
            })
        .then(function (data){
            console.log(data)
        }) 
    }



  
       

//         fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.createElement('li');
//         listItem.textContent = data[i].html_url;
//         repoList.appendChild(listItem);
//       }
//     });
// }
