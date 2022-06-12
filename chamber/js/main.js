// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;


//
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}
//
let d = new Date().getDay();
const banner = document.getElementById("banner");
if ( d === 1 || d === 2) {
  banner.style.display = "block";
}

// -----------join page ------------
var datevalue = document.getElementById('joindate');
console.log(datevalue);
const datenow = new Date();
const date2 = "1234"
datevalue.setAttribute("value", date2);
console.log(datevalue.value);
