//Variáveis e seleção de elementos
const apiKey =  "94ac82d0cf09e305dc60a161b1695a64";
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png/"

const searchBtn = document.querySelector("#search");
const cityInput = document.querySelector("#city-input");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");
const descElement= document.querySelector("#description");
const weatherIconElement= document.querySelector("#wheather-icon");
const countryElement= document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement= document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");




//Funções

//acessar a API
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

const res = await fetch(apiWeatherURL)
const data = await res.json()

return data;
}
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png/`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;

    weatherContainer.classList.remove("hide");

};

//Eventos

searchBtn.addEventListener("click", (e) => {
 e.preventDefault();     

 const city = cityInput.value; 

    showWeatherData(city);

    if (cityInput.value === "") {
        alert("Por favor, preencha o campo correspondente.");
        return;
    }

});


document.addEventListener("keyup", function(e) {
    
    if(e.key === "Enter")
    {
        const city = e.target.value;

        showWeatherData(city);
    }

});




