// select the elements to manipulate (output to)
const datevalue = document.querySelector("#join-date");
const message = document.querySelector("#date-message");
const datenow = new Date();
datevalue.value = datenow;
console.log(datevalue.value)
message.textContent = `Date: <em>${datenow}</em>`;
message.style.display = "block";

