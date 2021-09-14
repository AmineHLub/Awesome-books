const add = document.querySelector('#add_button');
const author = document.getElementById('author');
const title = document.getElementById('title');

class BooksAndAuthor {
  constructor(book, author, idOfbook) {
    this.book = book;
    this.author = author;
    this.idOfBook = idOfbook;
  }
}

let arrOfBooks;

arrOfBooks = JSON.parse(localStorage.getItem('storedBooks'));
if (arrOfBooks === null) {
  arrOfBooks = [];
}

// elements of array are posted on load
if (arrOfBooks.length > 0) {
  for (let i = 0; i < arrOfBooks.length; i += 1) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const buttonContainer = document.createElement('div');
    div.classList.add('book');
    div.id = `${arrOfBooks[i].idOfBook}`;
    h2.classList.add('book-name');
    h3.classList.add('author');
    document.querySelector('.books-list').append(div);
    h2.innerText = arrOfBooks[i].book;
    h3.innerText = arrOfBooks[i].author;
    div.append(h2);
    div.append(h3);
    buttonContainer.innerHTML = `<button onclick="arrposition(${arrOfBooks[i].idOfBook})">Remove</button>`;
    div.append(buttonContainer);
  }
}

// eslint-disable-next-line consistent-return
function addBook() {
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
    const idGenerator = Math.floor(Math.random() * 100);
    arrOfBooks.push(new BooksAndAuthor(title.value, author.value, idGenerator));
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const buttonContainer = document.createElement('div');
    div.classList.add('book');
    div.id = `${idGenerator}`;
    h2.classList.add('book-name');
    h3.classList.add('author');
    document.querySelector('.books-list').append(div);
    h2.innerText = title.value;
    h3.innerText = author.value;
    div.append(h2);
    div.append(h3);
    buttonContainer.innerHTML = `<button onclick="arrposition(${idGenerator})">Remove</button>`;
    div.append(buttonContainer);
    localStorage.setItem('storedBooks', JSON.stringify(arrOfBooks));
  }
}

add.addEventListener('click', addBook);

// eslint-disable-next-line no-unused-vars
function arrposition(number) {
  document.getElementById(`${number}`).remove();
  arrOfBooks.splice(arrOfBooks.findIndex((item) => item.idOfBook === number), 1);
  localStorage.setItem('storedBooks', JSON.stringify(arrOfBooks));
}