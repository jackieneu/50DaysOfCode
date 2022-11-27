//MY SOLUTION
const faq = document.querySelectorAll('.faq');
const faqToggles = document.querySelectorAll('.faq-toggle');

console.log(faqToggles);

faqToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    if (faq.item(index).classList.contains('active')) {
      faq.item(index).classList.remove('active');
    } else {
      faq.item(index).classList.add('active');
    }
  });
});

//HIS SOLUTION - uses parent node and toggle
// const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach((toggle) => {
//   toggle.addEventListener('click', () => {
//     toggle.parentNode.classList.toggle('active');
//   });
// });
