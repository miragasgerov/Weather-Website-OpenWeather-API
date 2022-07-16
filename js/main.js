const url = 'https://api.openweathermap.org/data/2.5/'
const key = '2b813faa0ce73def502d0e7dc02d3401'


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }


  function startDay() {
    const day = new Date();
    let w = day.getDate();
    let d = day.getMonth();
    let y = day.getFullYear();

    w = checkTime(w);
    d = checkTime(d);



    document.getElementById('day').innerHTML =  w + " ," + " " + d + " ," + " " + y;
  }


const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName) => {

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`

    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {

    let city = document.querySelector('.city')
    city.innerText = `${result.name}`

    let country = document.querySelector('.country')
    country.innerText = `${result.sys.country}`

    let weatherAboutDaily = document.querySelector('.weatherAboutDaily')
    weatherAboutDaily.innerText = `${result.weather[0].description}`

    let tempMax = document.querySelector('.tempMax')
    tempMax.innerText = `${Math.round(result.main.temp_max)+'°C'}`

    let tempMin = document.querySelector('.tempMin')
    tempMin.innerText = `${Math.round(result.main.temp_min)+'°C'}`

    let temperature = document.querySelector('.temperature')
    temperature.innerText = `${Math.round(result.main.temp)+'°C'}`


    let humidityDegree = document.querySelector('.humidityDegree')
    humidityDegree.innerText = `${Math.round(result.main.humidity)+'°C'}`

    let wind = document.querySelector('.wind')
    wind.innerText = `${Math.round(result.wind.speed)}`

}

const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keypress',setQuery)