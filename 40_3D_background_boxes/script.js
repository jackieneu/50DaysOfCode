const boxesContainer = document.getElementById('boxes');
const magicBtn = document.getElementById('btn');

magicBtn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
});

createBoxes();

function createBoxes() {
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`;
      boxesContainer.appendChild(box);
    }
  }
}
