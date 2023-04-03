//var api="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=29ba1603f1abdb6eacfabacffe49d96d"
var token = "29ba1603f1abdb6eacfabacffe49d96d";
var city = "San Diego"
var api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + token + "&units=imperial";
console.log(api);

function cityWeather(city) {
    fetch(api).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
            })
        }
        
    })
}
cityWeather("Naples")