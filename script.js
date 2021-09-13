const add = document.querySelector('#add_button');
const author = document.getElementById('author');
const title = document.getElementById('title');

class BooksAndAuthor {
  constructor(book, author) {
    this.book = book;
    this.author = author;
  }
}

let arrOfBooks = [];

// eslint-disable-next-line consistent-return
function addBook() {
  arrOfBooks.push(new BooksAndAuthor(title.value, author.value));
  if (!title.value || !author.value) {
    if (!document.querySelector('.adding-form > span')) {
      const errorMsg = document.createElement('span');
      errorMsg.innerText = 'Please fill the fields before adding your book!';
      document.querySelector('.adding-form').append(errorMsg);
    }
  } else {
    if (document.querySelector('.adding-form > span')) {
      document.querySelector('.adding-form > span').remove();
    }
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const buttonContainer = document.createElement('div');
    div.classList.add('book');
    h2.classList.add('book-name');
    h3.classList.add('author');
    document.querySelector('.books-list').append(div);
    h2.innerText = title.value;
    h3.innerText = author.value;
    div.append(h2);
    div.append(h3);
    buttonContainer.innerHTML = `<button onclick="arrposition(${arrOfBooks.length})">Remove</button>`;
    div.append(buttonContainer);
  }
}

add.addEventListener('click', addBook);

// eslint-disable-next-line no-unused-vars
function arrposition(number) {
  arrOfBooks = arrOfBooks.splice(number, number+1);
  console.log(arrOfBooks, arrOfBooks.length);
}