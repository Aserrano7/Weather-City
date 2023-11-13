var APIKey = '2291302f3ecdf9ef0323e30a488762cf';
var cities = [];
$("button").on("click", function (event) {
    event.preventDefault();
    var getCity = $("#getCity");
    var city = getCity.val().trim();
    cities.push(city)
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&units=imperial&appid=" + APIKey;
})