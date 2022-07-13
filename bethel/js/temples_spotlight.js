function getWidth() {
  let x = 1;
  var maxWidth = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
   );
  
   if(maxWidth > 896){
      x = 3;
   } else {
      x = 2;
   }
return x;
}
window.addEventListener("resize", getWidth);

const requestURL = 'https://miguelc62.github.io/wdd230/bethel/temples.json';
const cards = document.querySelector('.spotlight');
let vect = randomFunction();
let x = getWidth();

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const spot = jsonObject['temples'];
    spot.forEach(companies);
  });
 

  function randomFunction(){
    let i = 0;
    let arr = [];
    do {
      arr[i] = Math.floor(Math.random() * 9);
      i = i + 1;
    } while (i < 3);
    return arr;
  }
 
  function companies(temple, index) {

    // Create elements to add to the document
    let card = document.createElement('div');
    let photo = document.createElement('img');
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("a");

    card.setAttribute("class", "box spot1")
    
    var linkText = document.createTextNode("Temple link");
    p3.appendChild(linkText);
    p3.title = "Temple";
    p3.href = temple.website;
   
    //temple name
    h3.textContent = `${temple.name}`;  

    // Change the textContent property of the p element 
    p1.textContent = `${temple.adress}`;   
    p2.textContent = `${temple.phone_number}`;
    p3.setAttribute('href', temple.website);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    photo.setAttribute('src', temple.imageurl);
    photo.setAttribute('alt', `Image of ${temple.name}`);
    photo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(photo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    if (x > 2) { // If media query matches
      
      if (vect[0] == index || vect[1] == index || vect[2] == index){
    // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div.spotlight').appendChild(card);
      } 
    } else {
      if (vect[0] == index || vect[1] == index){
        // Add/append the existing HTML div with the cards class with the section(card)
          document.querySelector('div.spotlight').appendChild(card);
      }
    }
  }


