// User Input and Search------------------
var searchedCity = $("#citySearch");
var searchBtn = $("#searchBtn");

// City Suggestions------------------
var cities = $("#cityLinks");
var austin = $("#Austin");
var chicago = $("#Chicago");
var newYork = $("#NewYork");
var orlando = $("#Orlando");
var sanFran = $("#SanFrancisco");
var seattle = $("#Seattle");
var denver = $("#Denver");
var atlanta = $("#Atlanta");

// Main Search Information------------------
var cityInfo = $("#cityInfo");
var cityDate = $("#cityPlusDate");
var cityTemp = $("#cityTemp");
var cityHumid = $("#cityHumid");
var cityWind = $("#cityWind");
var cityUV = $("#cityUV");

// 5-Day Forecast------------------
var fiveDays = $("#5Days");

var day1 = $("#day1");
var day1Date = $("#day1Date");
var day1Temp = $("#day1Temp");
var day1Humid = $("#day1Humid");

var day2 = $("#day2");
var day2Date = $("#day2Date");
var day2Temp = $("#day2Temp");
var day2Humid = $("#day2Humid");

var day3 = $("#day3");
var day3Date = $("#day3Date");
var day3Temp = $("#day3Temp");
var day3Humid = $("#day3Humid");

var day4 = $("#day4");
var day4Date = $("#day4Date");
var day4Temp = $("#day4Temp");
var day4Humid = $("#day4Humid");

var day5 = $("#day5");
var day5Date = $("#day5Date");
var day5Temp = $("#day5Temp");
var day5Humid = $("#day5Humid");

// Functions
function searchWeather() {
    var city = searchedCity.val().trim();
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b1a89c4bdd79dbec82ba3b66e5df9e09";
    $.ajax({
        url: queryURL,
        method: "GET"        
    }).then(function(response) {
        console.log(response);
    });

}

// Event Listeners
searchBtn.on("click", function(event) {
    event.preventDefault();
    console.log(searchedCity.val().trim());
    searchWeather();
})

cities.on("click", function(event) {
    event.preventDefault();
    // console.log(event.target.id);
})



// api.openweathermap.org/data/2.5/forecast?q={city name}&appid=ebe25a82700b36c9e609f29681be7620