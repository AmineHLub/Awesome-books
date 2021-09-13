const add = document.querySelector('#add_button');
const author = document.getElementById('author');
const title = document.getElementById('title');

class BooksAndAuthor {
  constructor(book, author) {
    this.book = book;
    this.author = author;
  }
}

function addBook() {
  const bookAndAuthor = new BooksAndAuthor(title, author);
  console.log('ok');
}

add.addEventListener('click', addBook);