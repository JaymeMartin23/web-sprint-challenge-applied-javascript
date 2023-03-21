const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //  const card = document.createElement('div');
  
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);

  card.addEventListener('click', () => {
    console.log(article.headline);
  });

  return card;
};

export { Card };
  

 

  
  

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const endpoint = "http://localhost:5001/api/articles";
  
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const articles = Object.keys(data).map(key => data[key]);
      const container = document.querySelector(selector);
      articles.forEach(article => {
        const card = createCard(article);
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error fetching articles:", error);
    });
  };
  const createCard = (article) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card__title">${article.title}</div>
      <div class="card__author">${article.author}</div>
      <div class="card__content">${article.content}</div>
    `;
    return card;
  };
 

     

//export { card, cardAppender };
    
    
  
        
