// select the elements to manipulate (output to)
const datevalue = document.querySelector("#join-date");
const message = document.querySelector("#date-message");
const datenow = new Date();
const date2 = "1234"
datevalue.value = date2;
console.log(datevalue.value);
message.textContent = `Date: <em>${date2}</em>`;
message.style.display = "block";

