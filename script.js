const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search-box");
const weather = document.querySelector("#weather");
const weather1 = document.querySelector("#weather1");
const weather2 = document.querySelector("#weather2");

// temperature
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}
const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <h3>Temperature</h3>
            <h2>${data.main.temp}℃</h2>
            <br>
            <h3>Max/Min</h3>
            <h3>${data.main.temp_max}/${data.main.temp_min}℃</h3>
            
        </div>
    `
}
// wind and humidity 
const getWeather1 = async(city) => {
    weather1.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather1(data)
}
const showWeather1 = (data) => {
    if (data.cod == "404") {
        weather1.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather1.innerHTML = `
        <div>
            <h4>Wind Speed</h4>
            <h3>${data.wind.speed} Km/h</h3>
            <br>
            <h4>Humidity</h4>
            <h2>${data.main.humidity} %</h2>
        </div>
    `
}
// Atmospheric conditions
const getWeather2 = async(city) => {
    weather2.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    return showWeather2(data)
}
const showWeather2 = (data) => {
    if (data.cod == "404") {
        weather2.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather2.innerHTML = `
        <div>
            <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <h2>${data.weather[0].main}</h2>
        </div>
    `
}


// Event on search button click 
form.addEventListener("submit",
    function(event) 
    {
        getWeather(search.value);
        getWeather1(search.value);
        getWeather2(search.value);
        event.preventDefault();
    }
)