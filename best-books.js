const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const bookContain = document.getElementById('books-container');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const day = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page
  const my_key = "ViT8mwZAcQdAQCD22UWEbpGT3ClYG0d6";
  const list = 'hardcover-fiction'
  const date = `${year}-${month}-${day}`;
  const base_url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${my_key}`;
  
  fetch(base_url)
    .then(response => {
      console.log(response.json);
      return response.json();
    })
    .then(json => {
      console.log(json);
      let book = json.results.books[0];
      let title = book.title;
      let author = book.author;
      let description = book.description;
      document.getElementById('books-container').innerText = "1: " + "Title: " + title + "; Author: " + author + "; Description: " + description + "\n";
      let book1 = json.results.books[1];
      let title1 = book1.title;
      let author1 = book1.author;
      let description1 = book1.description;
      document.getElementById('books-container').innerText += "2: " + "Title: " + title1 + "; Author: " + author1 + "; Description: " + description1 + "\n";
      let book2 = json.results.books[2];
      let title2 = book2.title;
      let author2 = book2.author;
      let description2 = book2.description;
      document.getElementById('books-container').innerText += "3: " + "Title: " + title2 + "; Author: " + author2 + "; Description: " + description2 + "\n";
      let book3 = json.results.books[3];
      let title3 = book3.title;
      let author3 = book3.author;
      let description3 = book3.description;
      document.getElementById('books-container').innerText += "4: " + "Title: " + title3 + "; Author: " + author3 + "; Description: " + description3 + "\n";
      let book4 = json.results.books[4];
      let title4 = book4.title;
      let author4 = book4.author;
      let description4 = book4.description;
      document.getElementById('books-container').innerText += "5: " + "Title: " + title4 + "; Author: " + author4 + "; Description: " + description4;
    })
    .catch(error => {
      console.log("NYT API Error")
    });
});