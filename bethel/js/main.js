// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;


//
document.querySelector("#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//

function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}
//weather alert at the top of the page
let d = new Date().getDay();
const alert = document.getElementById("alert");
if ( d === 1 || d === 2) {
  alert.style.display = "block";
}
//
