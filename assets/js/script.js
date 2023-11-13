var APIKey = '2291302f3ecdf9ef0323e30a488762cf';
var cities = [];
$("button").on("click", function (event) {
    event.preventDefault();
    var getCity = $("#getCity");
    var city = getCity.val().trim();
    cities.push(city)
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&units=imperial&appid=" + APIKey;
        fetch(queryUrl)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            var currentIcon = data.weather[0].icon;
            var currentTemp = parseInt(data.main.temp) + "°F";
            var currentWind = parseInt(data.wind.speed) + "mph";
            var currentHum = data.main.humidity + "%";
            var currentIconURL = "http://openweathermap.org/img/w/" + currentIcon + ".png";

            $("#city").text(city);
            $("#temp").text("Temp: " + currentTemp);
            $("#humidity").text("Humidity: " + currentHum);
            $("#wind").text('Wind: ' + currentWind);
            $("#weatherIcon").attr("src", currentIconURL);

})
})