//var api="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=29ba1603f1abdb6eacfabacffe49d96d"
var token = "cea43c435331f22efaa268f4773df21e";
var city = "San Diego"
var elName = document.querySelector("#cityName");
var elTemp = document.querySelector("#temp");
var elWind = document.querySelector("#wind");
var elHumidity = document.querySelector("#humidity");
var elIcon = document.querySelector(".icon");

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
                var elImg  = document.createElement("img");
                elImg.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")
                console.log(elImg);
                elIcon.appendChild(elImg);

                var lat = data.coord.lat;
                var lon = data.coord.lon;

                var urlc2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&&appid=" + token + "&units=imperial";

                fetch(urlc2).then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            console.log(data);
                            var elForeDiv = document.querySelector(".row");
                            elForeDiv.innerHTML = `
                            <div class="col">
                                <div class="card">
                                    <ul>
                                        <li>
                                            Temp: <span id="temp"></span> F.
                                        </li>
                                        <li>
                                            Wind: <span id="wind"></span> MPH.
                                        </li>
                                        <li>
                                            Humidity: <span id="humidity"></span> %.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            `;


                        })
                    }
                })


                
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
