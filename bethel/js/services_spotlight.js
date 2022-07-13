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
     } else if(maxWidth > 600) {
        x = 2;
     } else {
        x = 1;
     }
  return x;
  }
  window.addEventListener("resize", getWidth);
  
  const requestURL = 'https://miguelc62.github.io/wdd230/bethel/services.json';
  const cards = document.querySelector('.services');
  let vect = randomFunction();
  let x = getWidth();
  
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const spot = jsonObject['services'];
      spot.forEach(pictures);
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
   
    function pictures(service, index) {
  
        // Create elements to add to the document
        let card = document.createElement('div');
        let photo = document.createElement('img');
        let p1 = document.createElement("p");

        card.setAttribute("class", "box spot1")

        // Change the textContent property of the p element 
        p1.textContent = `${service.name}`;   

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        photo.setAttribute('src', service.imageurl);
        photo.setAttribute('alt', `Image of ${service.name}`);
        photo.setAttribute('loading', 'lazy');

        // Add/append the section(card) with the h2 element
        card.appendChild(photo);
        card.appendChild(p1);

        if (x > 2) { // If media query matches
        
            if (vect[0] == index || vect[1] == index || vect[2] == index){
            // Add/append the existing HTML div with the cards class with the section(card)
                document.querySelector('div.services').appendChild(card);
            } 
        } else {
            if (x > 1) {
                if (vect[0] == index || vect[1] == index){
                    // Add/append the existing HTML div with the cards class with the section(card)
                    document.querySelector('div.services').appendChild(card);
                }
            } else {
                if (vect[0] == index){
                    // Add/append the existing HTML div with the cards class with the section(card)
                    document.querySelector('div.services').appendChild(card);
                }
            }
        
        }
    }
  
  
  