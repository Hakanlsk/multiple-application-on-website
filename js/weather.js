const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'f0b128feadd3aa33dc458b1bcda14ab1';

const searchBar = document.getElementById('searchBar');

const setQuery = (e) => {
    if(e.keyCode == '13'){
        getResult(searchBar.value);
    }
}
/* api ye GET isteği yollamak*/
const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`;
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description; 

    let minMax = document.querySelector('.minMax');
    minMax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C `
}

searchBar.addEventListener('keypress', setQuery);



















