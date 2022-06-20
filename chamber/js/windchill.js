const celsius = document.getElementById('current-temp');
const kmph = document.getElementById('speed');
const chill = document.getElementById('fw');
//const celsiusFloat = parseFloat(celsius.textContent);
//const kmphFloat = parseFloat(kmph.textContent)
//const fahrenheit = (celsiusFloat * 1.8) + 32;
//const mph = kmphFloat * 0.62;
const fahrenheit = (celsius * 1.8) + 32;
const mph = kmph * 0.62;
console.log(celsius); // this is temporary for development only
console.log(mph); // this is temporary for development only
let chillfactor = 35.74 + 0.6215 * fahrenheit - 35.75 * mph ** 0.16 + 0.4275 * fahrenheit * mph ** 0.16;
chillfactor = chillfactor.toFixed(1);
if ( fahrenheit > 50 || mph < 3) {
    chill.textContent = "N/A";
} else {
    chillCelcius = (chillfactor - 32) / 1.8
    chill.textContent = `${chillCelcius} °C`;
}
