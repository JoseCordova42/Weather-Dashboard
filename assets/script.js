// Dayjs------setting today's date next to city name------------
dayjs().format();
$("#today").text(dayjs().format('dddd, MMMM D, YYYY'));

// User Input and Search------------------
var searchedCity = $("#citySearch");
var searchBtn = $("#searchBtn");

// City Suggestions------------------
var cities = $("#cityLinks");

// Main Search Information------------------
var cityDate = $("#cityPlusDate");
var cityTemp = $("#cityTemp");
var cityHumid = $("#cityHumid");
var cityWind = $("#cityWind");

// 5-Day Forecast------------------
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

// Functions------------------
function searchWeather() {
    var city = searchedCity.val().trim();

    // Ajax call for main cityInfo display------------------
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b1a89c4bdd79dbec82ba3b66e5df9e09&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"        
    }).then(function(response) {
        var weatherIcon = response.weather[0].icon;
        cityDate.text(response.name + " / " +  dayjs().format('dddd, MMMM D, YYYY'));
        cityDate.append(/*html*/`
            <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">
            `);
        cityTemp.text("Temperature: " + response.main.temp + " F");
        cityHumid.text("Humidity: " + response.main.humidity + "%");
        cityWind.text("Wind Speed: " + response.wind.speed + "mph");
    });

    // Ajax call for 5-day forecast------------------
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ebe25a82700b36c9e609f29681be7620&units=imperial";
    $.ajax({
        url: fiveDayURL,
        method: "GET"        
    }).then(function(response) {
        day1Date.text(dayjs().add(1, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png">`);
        day1Temp.text("Temp: " + response.list[4].main.temp + " F");
        day1Humid.text("Humidity: " + response.list[4].main.humidity + "%");
        day2Date.text(dayjs().add(2, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png">`);
        day2Temp.text("Temp: " + response.list[12].main.temp + " F");
        day2Humid.text("Humidity: " + response.list[12].main.humidity + "%");
        day3Date.text(dayjs().add(3, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[20].weather[0].icon}@2x.png">`);
        day3Temp.text("Temp: " + response.list[20].main.temp + " F");
        day3Humid.text("Humidity: " + response.list[20].main.humidity + "%");
        day4Date.text(dayjs().add(4, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[28].weather[0].icon}@2x.png">`);
        day4Temp.text("Temp: " + response.list[28].main.temp + " F");
        day4Humid.text("Humidity: " + response.list[28].main.humidity + "%");
        day5Date.text(dayjs().add(5, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[36].weather[0].icon}@2x.png">`);
        day5Temp.text("Temp: " + response.list[36].main.temp + " F");
        day5Humid.text("Humidity: " + response.list[36].main.humidity + "%");
    });

    // Local Storage for searched city------------------
    localStorage.setItem("last city", JSON.stringify(city));
    var storedCity = JSON.parse(localStorage.getItem("last city"));
    // Prevents blank or repeat searches------------------
    if (city === "" || cities.children().text().includes(city) === true) {
        return;
    } else {
        cities.prepend(/*html*/`
        <a href="#" class="list-group-item list-group-item-action" id=${storedCity}>${storedCity}</a>
    `);
    }
}

// Event Listeners------------------------------------------------------
// Search Button------------------
searchBtn.on("click", function(event) {
    event.preventDefault();
        searchWeather();
})

// Suggested City Buttons------------------
cities.on("click", function(event) {
    event.preventDefault();
    var city = event.target.text;

    // Ajax call for main cityInfo display------------------
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b1a89c4bdd79dbec82ba3b66e5df9e09&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"        
    }).then(function(response) {
        var weatherIcon = response.weather[0].icon;
        cityDate.text(response.name + " / " + dayjs().format('dddd, MMMM D, YYYY'));
        cityDate.append(/*html*/`
            <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png">
            `);
        cityTemp.text("Temperature: " + response.main.temp + " F");
        cityHumid.text("Humidity: " + response.main.humidity + "%");
        cityWind.text("Wind Speed: " + response.wind.speed + "mph");
    });

    // Ajax call for 5-day forecast------------------
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ebe25a82700b36c9e609f29681be7620&units=imperial";
    $.ajax({
        url: fiveDayURL,
        method: "GET"        
    }).then(function(response) {
        day1Date.text(dayjs().add(1, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[4].weather[0].icon}@2x.png">`);
        day1Temp.text("Temp: " + response.list[4].main.temp + " F");
        day1Humid.text("Humidity: " + response.list[4].main.humidity + "%");
        day2Date.text(dayjs().add(2, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[12].weather[0].icon}@2x.png">`);
        day2Temp.text("Temp: " + response.list[12].main.temp + " F");
        day2Humid.text("Humidity: " + response.list[12].main.humidity + "%");
        day3Date.text(dayjs().add(3, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[20].weather[0].icon}@2x.png">`);
        day3Temp.text("Temp: " + response.list[20].main.temp + " F");
        day3Humid.text("Humidity: " + response.list[20].main.humidity + "%");
        day4Date.text(dayjs().add(4, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[28].weather[0].icon}@2x.png">`);
        day4Temp.text("Temp: " + response.list[28].main.temp + " F");
        day4Humid.text("Humidity: " + response.list[28].main.humidity + "%");
        day5Date.text(dayjs().add(5, 'day').format('dd - M/D/YY'))
                .append(/*html*/`<img src="https://openweathermap.org/img/wn/${response.list[36].weather[0].icon}@2x.png">`);
        day5Temp.text("Temp: " + response.list[36].main.temp + " F");
        day5Humid.text("Humidity: " + response.list[36].main.humidity + "%");
    });
})