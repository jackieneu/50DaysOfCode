const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});

//My original solution - toggle is better though
// if (search.classList.contains('active')) {
//     search.classList.remove('active');
//   } else {
//     search.classList.add('active');
//   }
