//var api="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=29ba1603f1abdb6eacfabacffe49d96d"
var token = "29ba1603f1abdb6eacfabacffe49d96d";
var city = "San Diego"
var elName = document.querySelector("#cityName");
var elTemp = document.querySelector("#temp");
var elWind = document.querySelector("#wind")
var elHumidity = document.querySelector("#humidity")
function createUrl(city) {
    return "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + token + "&units=imperial";
}

function weatherFetch(city) { 
    var apiUrl = createUrl(city);

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                elName.textContent = data?.name;
                elTemp.textContent = data?.main.temp;
                elWind.textContent = data?.wind.speed;
                elHumidity
                
            })
        }
        
    })
 }

function submitHandler(event) {
    event.preventDefault()
    city = event.target.elements.city.value;
  
    weatherFetch(city);

}

weatherFetch(city);




var elSearch= document.querySelector("#city");
document.addEventListener("submit", submitHandler);
