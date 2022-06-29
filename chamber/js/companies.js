const requestURL = 'https://github.com/MiguelC62/wdd230/blob/main/chamber/companies.json';
const cards = document.querySelector('.cards');
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['companies'];
    prophets.forEach(displayCompanies);
  });

  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("a");

    card.setAttribute("class", "id")
    
    var linkText = document.createTextNode("http://example.com");
    p3.appendChild(linkText);
    p3.title = "TASTIL";
    p3.href = company.website;

    // Change the textContent property of the p element to contain the prophet's date and place birth
    p1.textContent = `${company.adress}`;   
    p2.textContent = `${company.phone_number}`;
    p3.setAttribute('href', company.website);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', company.imageurl);
    logo.setAttribute('alt', `Image of ${company.name}-${company.membership} Membership`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  //lista
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");
const section = document.querySelector(".id");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


