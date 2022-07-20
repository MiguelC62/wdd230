
  const requestURL = 'https://miguelc62.github.io/wdd230/bethel/temples.json';
 
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const spot = jsonObject['temples'];
      spot.forEach(companies);
    });
   
   
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

      //history
      let history = document.createElement("p");
      history.textContent = `${temple.history}`;

      //button like
      let favorite = document.createElement("button");
      const heart = document.createElement("img");
      heart.setAttribute("alt", "like heart" );
      favorite.appendChild(heart);

      if(localStorage.getItem(temple.name) == "true") {
        heart.src = "images/heart-red.jpg";
        }
        else {
            heart.src = "images/heart-black.jpg";
        }

    favorite.setAttribute('id', 'like');
    favorite.setAttribute('value', "like-btn");
    favorite.addEventListener("click", () => {
            if(localStorage.getItem(temple.name) == "true") {
            localStorage.setItem(temple.name, "false");
            heart.src = "images/heart-black.jpg";
        }
        else {
            localStorage.setItem(temple.name, "true");
            heart.src = "images/heart-red.jpg";
        }
    });

  
      // Add/append the section(card) with the h2 element
      card.appendChild(h3);
      card.appendChild(photo);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(history);
      card.appendChild(p3);
      card.appendChild(favorite)
  
      
      // Add/append the existing HTML div with the cards class with the section(card)
      document.querySelector('div.cards').appendChild(card);
        
      }
      
 
  
  