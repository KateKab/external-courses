const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const currentImg = document.querySelector('.imgWrapper');

const img1 = 'assets/saxony_forest.JPG';
const img2 = 'assets/caucasus_field.jpg';

const delay = 3000;
const images = [img1, img2];
let i = 0;

const insertImage = (image) => {
  currentImg.innerHTML = `<img class="slide" src=${images[image]}>`;
};

function showSlides() {
  if (i < images.length - 1) {
    i += 1;
  } else {
    i = 0;
  }

  insertImage(i);
  setTimeout(showSlides, delay);
}

showSlides();

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    prevBtn.click();
  } else if (e.code === 'ArrowRight') {
    nextBtn.click();
  }
});

prevBtn.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    prevBtn.click();
  }
});

prevBtn.addEventListener('click', () => {
  if (i > 0) {
    i -= 1;
  } else {
    i = images.length - 1;
  }

  insertImage(i);
});

nextBtn.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    nextBtn.click();
  }
});

nextBtn.addEventListener('click', () => {
  if (i > 0) {
    i -= 1;
  } else {
    i = images.length - 1;
  }

  insertImage(i);
});
