//import dayjs from 'dayjs'
dayjs().format();
$("#today").text(dayjs().format('dddd, MMMM D, YYYY'));

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

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b1a89c4bdd79dbec82ba3b66e5df9e09&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"        
    }).then(function(response) {
        cityDate.text(response.name + " " +  dayjs().format('dddd, MMMM D, YYYY'));
        cityTemp.text("Temperature: " + response.main.temp + " F");
        cityHumid.text("Humidity: " + response.main.humidity + "%");
        cityWind.text("Wind Speed: " + response.wind.speed + "mph");
    });

    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ebe25a82700b36c9e609f29681be7620&units=imperial";
    $.ajax({
        url: fiveDayURL,
        method: "GET"        
    }).then(function(response) {
        day1Date.text(dayjs().add(1, 'day').format('dd - M/D/YY'));
        day1Temp.text("Temp: " + response.list[3].main.temp + " F");
        day1Humid.text("Humidity: " + response.list[3].main.humidity + "%");
        day2Date.text(dayjs().add(2, 'day').format('dd - M/D/YY'));
        day2Temp.text("Temp: " + response.list[11].main.temp + " F");
        day2Humid.text("Humidity: " + response.list[11].main.humidity + "%");
        day3Date.text(dayjs().add(3, 'day').format('dd - M/D/YY'));
        day3Temp.text("Temp: " + response.list[19].main.temp + " F");
        day3Humid.text("Humidity: " + response.list[19].main.humidity + "%");
        day4Date.text(dayjs().add(4, 'day').format('dd - M/D/YY'));
        day4Temp.text("Temp: " + response.list[27].main.temp + " F");
        day4Humid.text("Humidity: " + response.list[27].main.humidity + "%");
        day5Date.text(dayjs().add(5, 'day').format('dd - M/D/YY'));
        day5Temp.text("Temp: " + response.list[35].main.temp + " F");
        day5Humid.text("Humidity: " + response.list[35].main.humidity + "%");
    });

}

// Event Listeners
searchBtn.on("click", function(event) {
    event.preventDefault();
    searchWeather();
})

cities.on("click", function(event) {
    event.preventDefault();
    var city = event.target.text;

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b1a89c4bdd79dbec82ba3b66e5df9e09&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"        
    }).then(function(response) {
        cityDate.text(response.name + " " + dayjs().format('dddd, MMMM D, YYYY'));
        cityTemp.text("Temperature: " + response.main.temp + " F");
        cityHumid.text("Humidity: " + response.main.humidity + "%");
        cityWind.text("Wind Speed: " + response.wind.speed + "mph");
    });

    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ebe25a82700b36c9e609f29681be7620&units=imperial";
    $.ajax({
        url: fiveDayURL,
        method: "GET"        
    }).then(function(response) {
        day1Date.text(dayjs().add(1, 'day').format('dd - M/D/YY'));
        day1Temp.text("Temp: " + response.list[3].main.temp + " F");
        day1Humid.text("Humidity: " + response.list[3].main.humidity + "%");
        day2Date.text(dayjs().add(2, 'day').format('dd - M/D/YY'));
        day2Temp.text("Temp: " + response.list[11].main.temp + " F");
        day2Humid.text("Humidity: " + response.list[11].main.humidity + "%");
        day3Date.text(dayjs().add(3, 'day').format('dd - M/D/YY'));
        day3Temp.text("Temp: " + response.list[19].main.temp + " F");
        day3Humid.text("Humidity: " + response.list[19].main.humidity + "%");
        day4Date.text(dayjs().add(4, 'day').format('dd - M/D/YY'));
        day4Temp.text("Temp: " + response.list[27].main.temp + " F");
        day4Humid.text("Humidity: " + response.list[27].main.humidity + "%");
        day5Date.text(dayjs().add(5, 'day').format('dd - M/D/YY'));
        day5Temp.text("Temp: " + response.list[35].main.temp + " F");
        day5Humid.text("Humidity: " + response.list[35].main.humidity + "%");
    });
})