const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', (event) => {
  //My solution
  //   background.style.filter = `blur(${20 - password.value.length}px)`;

  //Their solution
  const input = event.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
