import axios from "axios";

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
  


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
    
    axios.get('http://localhost:5001/api/articles')
    .then(response => {
      const data = response.data;

      const bootstrap = response.data.articles.bootstrap;
      const javascript = response.data.articles.javascript;
      const jquery = response.data.articles.jquery;
      const node = response.data.articles.node;
      const technology = response.data.articles.technology;

      console.log(response.data.articles)
      const cardContainer = document.createElement('div');
      cardContainer.classList.add('cards-container');

      for (let article of response.data.articles.bootstrap) {
        const card = Card(article);
        cardContainer.appendChild(card);
      }
      for (let article of response.data.articles.javascript) {
        const card = Card(article);
        cardContainer.appendChild(card);
      }
      for (let article of response.data.articles.jquery) {
        const card = Card(article);
        cardContainer.appendChild(card);
      }
      for (let article of response.data.articles.node) {
        const card = Card(article);
        cardContainer.appendChild(card);
      }
      for (let article of response.data.articles.technology) {
        const card = Card(article);
        cardContainer.appendChild(card);
      }

      const selectorElement = document.querySelector(selector);
      selectorElement.appendChild(cardContainer);

    })
    .catch(error => console.error(error));
};

export { cardAppender };






 
  













  

 
 

     

//export { card, cardAppender };
    
    
  
        
