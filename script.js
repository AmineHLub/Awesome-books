/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-implied-eval */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
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

class Management {
  previousData = JSON.parse(localStorage.getItem('storedBooks'));

  add() {
    let arrOfBooks = [];
    if (this.previousData) {
      arrOfBooks = this.previousData;
    }
    const idGenerator = Math.floor(Math.random() * 100);
    arrOfBooks.push(new BooksAndAuthor(title.value, author.value, idGenerator));
    localStorage.setItem('storedBooks', JSON.stringify(arrOfBooks));
    // eslint-disable-next-line no-restricted-globals
    setTimeout('window.location.reload()', 0);
  }

  delete(number) {
    document.getElementById(`${number}`).remove();
    const arrOfBooks = this.previousData;
    arrOfBooks.splice(arrOfBooks.findIndex((item) => item.idOfBook === number), 1);
    localStorage.setItem('storedBooks', JSON.stringify(arrOfBooks));
    setTimeout('window.location.reload()', 0);
  }
}

// eslint-disable-next-line no-unused-vars
function addbook() {
  if (!title.value || !author.value) {
    if (!document.querySelector('.adding-form > div')) {
      const errorMsg = document.createElement('div');
      errorMsg.innerText = 'Please fill the fields before adding your book!';
      document.querySelector('.adding-form').append(errorMsg);
      errorMsg.classList.add('error-msg');
    }
  } else {
    if (document.querySelector('.adding-form > div')) {
      document.querySelector('.adding-form > div').remove();
    }
    new Management().add();
  }
}

// eslint-disable-next-line no-unused-vars
function helperDelete(number) {
  new Management().delete(number);
}

function showbooklist() {
  const storageData = JSON.parse(localStorage.getItem('storedBooks'));
  if (storageData) {
    for (let i = 0; i < storageData.length; i += 1) {
      document.querySelector('.books-list').style.display = 'block';
      const div = document.createElement('div');
      const authorAndBookContainer = document.createElement('div');
      const h2 = document.createElement('h3');
      const h3 = document.createElement('h3');
      const spanby = document.createElement('span');
      const buttonContainer = document.createElement('div');
      div.classList.add('book');
      authorAndBookContainer.classList.add('flexing');
      div.id = `${storageData[i].idOfBook}`;
      h2.classList.add('book-name');
      h3.classList.add('author');
      document.querySelector('.books-list').append(div);
      h2.innerText = `"${storageData[i].book}"`;
      h3.innerText = storageData[i].author;
      authorAndBookContainer.append(h2);
      authorAndBookContainer.append(spanby);
      spanby.innerText = ('by');
      authorAndBookContainer.append(h3);
      div.append(authorAndBookContainer);
      buttonContainer.innerHTML = `<button onclick="helperDelete(${storageData[i].idOfBook})">Remove</button>`;
      div.append(buttonContainer);
      if (i % 2 === 0) {
        div.style.backgroundColor = '#a9a4a4ab';
      } else {
        div.style.backgroundColor = 'white';
      }
    }
  }
}

if (!JSON.parse(localStorage.getItem('storedBooks')) || JSON.parse(localStorage.getItem('storedBooks')).length === 0) {
  document.querySelector('.books-list').style.display = 'none';
  const errorMsg = document.createElement('span');
  errorMsg.innerText = 'There are no books saved!';
  document.querySelector('.adding-form').append(errorMsg);
}

showbooklist();
add.addEventListener('click', addbook);

// get time

// single page app

const list = document.querySelector('.list-link');
const addNew = document.querySelector('.Add-link');
const contact = document.querySelector('.contact-link');
const bookList = document.querySelector('.book_list');
const addBook = document.querySelector('.add-new-books');
const contactSection = document.querySelector('.contact');

list.addEventListener('click', () => {
  bookList.classList.remove('close');
  addBook.classList.add('close');
  contactSection.classList.add('close');
});

addNew.addEventListener('click', () => {
  bookList.classList.add('close');
  addBook.classList.remove('close');
  addBook.classList.add('show');
  contactSection.classList.add('close');
});

contact.addEventListener('click', () => {
  bookList.classList.add('close');
  addBook.classList.add('close');
  contactSection.classList.add('show');
  contactSection.classList.remove('close');
});

const { DateTime } = luxon;
const now = DateTime.now();
document.querySelector('.date-now').innerText = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);