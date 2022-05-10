const mainContent = document.querySelector('.mainContent');
const addBook = document.querySelector('.addBookBtn');
const popularBooks = document.querySelector('.popular');
const addBookModal = document.querySelector('.addBookModal');
const inputTitle = document.querySelector('.inputTitle');
const inputAuthor = document.querySelector('.inputAuthor');
const inputCover = document.querySelector('.inputImg');
const confirmAdd = document.querySelector('.confirmAdd');
const allBooks = document.querySelector('.all');
const searchButton = document.querySelector('.searchButton');

let books;

function drawRating(rating) {
  const star = '&#xf005;';
  const halfStar = '&#xf123;';
  const emptyStar = '&#xf006';

  let halfPart = 0;

  if (rating > Math.round(rating)) {
    halfPart = 1;
  }

  let emptyPart = 5 - Math.round(rating) - halfPart;

  if (emptyPart < 0) {
    emptyPart = 0;
  }

  return `${star.repeat(Math.round(rating))}${halfStar.repeat(halfPart)}${emptyStar.repeat(emptyPart)}`;
}

function insertBook(element) {
  const book = document.createElement('div');

  book.className = 'book';
  book.innerHTML = `<img class="bookCover" src=${element.cover}></img>
    <div class="bookInfo">
      <p class="title">${element.title}</p>
      <p class="author">by <span class="writer">${element.author}</span></p>
      <p class="rating" id= >${drawRating(element.rating)}</p>
    </div>`;
  mainContent.appendChild(book);

  document.querySelectorAll('.rating').forEach((el) => {
    el.addEventListener('click', (event) => {
      const x = event.target.getBoundingClientRect().x;
      const rating = (event.clientX - x) / (el.clientWidth / 5);
      const targetRating = event.target;

      targetRating.innerHTML = '';
      targetRating.innerHTML = `${drawRating(rating)}`;
    });
  });
}

function insertBooks(data) {
  data.forEach((element) => {
    insertBook(element);
  });
}

addBook.addEventListener('click', () => {
  if (addBookModal.style.display === 'none') {
    addBookModal.style.display = 'block';
  } else addBookModal.style.display = 'none';
});

function addBookData() {
  books[books.length - 1].cover = inputCover.value;
  books[books.length - 1].title = inputTitle.value;
  books[books.length - 1].author = inputAuthor.value;
  books[books.length - 1].rating = 0;
}

confirmAdd.addEventListener('click', () => {
  books.push({});
  addBookData();
  JSON.stringify(books);
  insertBook(books[books.length - 1]);
  addBookModal.style.display = 'none';
});

popularBooks.addEventListener('click', () => {
  mainContent.innerHTML = '';

  books.forEach((element) => {
    if (element.rating >= 4.5) {
      insertBook(element);
    }
  });
});

allBooks.addEventListener('click', () => {
  mainContent.innerHTML = '';
  insertBooks(books);
});

searchButton.addEventListener('click', () => {
  const searchInput = document.querySelector('.searchField').value;

  mainContent.innerHTML = '';

  books.forEach((element) => {
    if (element.title.includes(searchInput) || element.author.includes(searchInput)) {
      insertBook(element);
    }
  });
});

window.onload = () => {
  fetch('library.json')
    .then((response) => response.json())
    .then((objs) => {
      books = objs;
    })
    .then(() => insertBooks(books));
};
