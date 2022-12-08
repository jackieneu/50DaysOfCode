const textEl = document.getElementById('text');
const speedEl = document.querySelector('.speed');
const text = 'We Love Programming!';
let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (event) => {
  speed = 300 / event.target.value;
});
