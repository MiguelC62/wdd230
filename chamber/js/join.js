// -----------join page ------------
function varhidden(event){
    var datevalue = document.getElementById('joindate').value;
    console.log(datevalue);
    const datenow = event.timeStamp;
    datevalue.setAttribute("value", datenow);
    console.log(datevalue.value);
}
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", varhidden);

