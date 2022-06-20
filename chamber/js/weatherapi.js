// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector("#speed");
const chill = document.getElementById('fw');

//API URL with arguments  
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.786&lon=-65.412&appid=fee85901d3800ad04d1c115528aaa349&units=metric';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    tempe = data.main.temp;
    wind = data.wind.speed * 3.6;
    currentTemp.innerHTML = `<strong>${tempe.toFixed(1)}</strong>`;
    currentWind.innerHTML = `<strong>${wind.toFixed(1)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    chill.textContent = `${chillTemperature(tempe,wind)}`;
  });

function chillTemperature(celsius, kmph) {
	//const celsiusFloat = parseFloat(celsius.textContent);
//const kmphFloat = parseFloat(kmph.textContent)
//const fahrenheit = (celsiusFloat * 1.8) + 32;
//const mph = kmphFloat * 0.62;
const fahrenheit = (celsius * 1.8) + 32;
const mph = kmph * 0.62;
console.log(fahrenheit); // this is temporary for development only
console.log(mph); // this is temporary for development only
let chillfactor = 35.74 + 0.6215 * fahrenheit - 35.75 * mph ** 0.16 + 0.4275 * fahrenheit * mph ** 0.16;
chillfactor = chillfactor.toFixed(1);
if ( fahrenheit > 50 || mph < 3) {
    chilltempe = "N/A";
} else {
    chillCelcius = (5/9)*(chillfactor - 32)
    chilltempe = `${chillCelcius} °C`;
}
return chilltempe
}



  
  