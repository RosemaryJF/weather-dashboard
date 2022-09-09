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

        // $("#search-history").text(userCityEntry);
        resultsReturn()
        displayResults()
    })
}

citySearch()

    
function resultsReturn () {
    userCityEntry = $("#user-input").val().toLowerCase()

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCityEntry + "&appid=" + APIKey + "&units=metric&temperature.value=&wind.speed=&humidity.value=";
    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                return response.json()
            }
        })
        
        .then(function (data) {
            for (var i=0; i < data.length; i++) {
                console.log(data[i].name)
                // console.log(data[i].name)
                // console.log(data[i].main.temp)
                // console.log(data[i].wind.speed)
                // console.log(data[i].main.humidity)
                // console.log(data[i].uvi)
                    
            }
        })
}

function displayResults () {

}
        //       $(resultsDisplayEl).text(data);
        //     });
        //   } else {
        //     alert('Error: ' + response.statusText);
        //   }
        // })

        // .then(function (response) {
        //     return response.json();
        //   })
        //   .then(function (data) {
        //     console.log('Github Repo Issues \n----------');
        //     for (var i = 0; i < data.length; i++) {
        //       console.log(data[i].url);
        //       console.log(data[i].user.login);
        //     }
        //   });
        

    //  .then(function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //         // resultsDisplayEl.textContent = data[i]
    //         console.log(data)
    //     }
    




  
       

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
