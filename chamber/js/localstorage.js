window.addEventListener('load', function(){
const todayDis = document.querySelector(".today");
const visitsDis = document.querySelector(".visits");
var dice = "This is your first visit!";
let dayText;

const now = Math.floor(Date.now()/8.64e7);
localStorage.setItem("lastDay", now);

// get the stored value in localStorage
let numVis = Number(localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVis !== 0) {
	visitsDis.textContent = numVis;
} else {
	visitsDis.textContent = dice;
}
// increment the number of visits.
numVis++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVis);


// Last Visit
const formerday = Number(localStorage.getItem("lastDay"));
const daydiff = now - formerday

dayText = `${Math.round(daydiff)}`

// show todays date.
todayDis.textContent = dayText;

});
