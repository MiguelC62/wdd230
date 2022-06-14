// -----------join page ------------
var datevalue = document.getElementById('joindate').value;
console.log(datevalue);
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", varhidden);

function varhidden(){
    var datevalue = document.getElementById('joindate').value;
    console.log(datevalue);
    const datenow = new Date();
    datevalue.setAttribute("value", datenow);
    console.log(datevalue.value);
}
