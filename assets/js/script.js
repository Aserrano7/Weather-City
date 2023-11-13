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

            var url2 =
                "https://api.openweathermap.org/data/2.5/forecast?q=" + city + '&units=imperial&appid=' + APIKey;

      
            fetch(url2)
                .then(function (response) {
                    console.log(response);
                    return response.json();
                })
                .then(function (data) {
                    var date = new Date();
                    for (i = 0; i < 6; i++) {
                        var val = (date.getMonth() + 1) + "/" + (date.getDate() + i) + "/" + date.getFullYear();
                        $("#day-" + i).text(val);
                        var icons = [];
                        var iconsURL = [];
                        icons[i] = data.list[i + 1].weather[0].icon;
                        iconsURL[i] = "http://openweathermap.org/img/w/" + icons[i] + ".png";
                        $("#icon-" + i).attr("src", iconsURL[i]);
                        var temperture = parseInt(data.list[i + 1].main.temp) + "°F";
                        $('#temp-' + i).text("Temp: " + temperture);
                        var humid = data.list[i + 1].main.humidity + "%";
                        $('#humidity-' + i).text("Humidity: " + humid);
                        var windSpeed = parseInt(data.list[i + 1].wind.speed) + "mph";
                        $("#wind-" + i).text('Wind: ' + windSpeed);

                    }

                });
        });

});
console.log(cities);