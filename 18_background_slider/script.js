const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');

let activeSlide = 0;

//My Solution - not great, could use functions better, I used his setBgToBody function but didn't think of that before
// rightArrow.addEventListener('click', () => {
//   if (activeSlide === slides.length - 1) {
//     slides[activeSlide].classList.remove('active');
//     activeSlide = 0;
//     slides[activeSlide].classList.add('active');
//     setBgToBody();
//   } else {
//     activeSlide++;
//     slides[activeSlide - 1].classList.remove('active');
//     slides[activeSlide].classList.add('active');
//     setBgToBody();
//   }
// });

//His Solution
rightArrow.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftArrow.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}
