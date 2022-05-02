const mainContent = document.querySelector('.mainContent');

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

  return `${star.repeat(Math.round(rating))}${halfStar.repeat(
    halfPart,
  )}${emptyStar.repeat(emptyPart)}`;
}

function insertBooks() {
  fetch('library.json')
    .then((response) => response.json())

    .then((books) => {
      books.forEach((element) => {
        const book = document.createElement('div');

        book.className = 'book';
        book.innerHTML = `<img class="bookCover" src=${element.cover}></img>
      <div class="bookInfo">
        <p class="title">${element.title}</p>
        <p class="author">by <span class="writer">${element.author}</span></p>
        <p class="rating">${drawRating(element.rating)}</p>
      </div>`;
        mainContent.appendChild(book);
      });
    });
}

window.onload = insertBooks();
