const requestURL = 'https://miguelc62.github.io/wdd230/chamber/companies.json';
const cards = document.querySelector('.spotlight');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const spot = jsonObject['companies'];
    spot.forEach(ompanies);
  });c
  const arrayN = [1,2,3]
  arrayN.forEach(randomFunction);
  function randomFunction(item,index, arr){
    arra[index] = Math.floor(Math.random() * 9);
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  }
  function companies(company, index) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let logo = document.createElement('img');
    let h3 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("a");

    card.setAttribute("class", "spot1")
    
    var linkText = document.createTextNode("http://example.com");
    p3.appendChild(linkText);
    p3.title = "TASTIL";
    p3.href = company.website;

    h3.textContent = `${company.name}`;  

    // Change the textContent property of the p element 
    p1.textContent = `${company.adress}`;   
    p2.textContent = `${company.phone_number}`;
    p3.setAttribute('href', company.website);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `Image of ${company.name}-${company.membership} Membership`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

   

    if (picnumber == index){
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.spotlight').appendChild(card);
    }
  }



