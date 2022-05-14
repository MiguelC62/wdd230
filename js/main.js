// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// set last modification
document.getElementById("lastupdated").innerHTML = document.lastModified; 
 
