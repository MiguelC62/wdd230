// select the elements to manipulate (output to)
const datevalue = document.querySelector("#join-date");
const message = document.querySelector("#date-message");
const now = new Date();
datevalue.value = now;
message.textContent = `Date: <em>${now}</em>`;
message.style.display = "block";

