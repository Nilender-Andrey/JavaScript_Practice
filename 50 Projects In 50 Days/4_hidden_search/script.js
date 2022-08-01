const search = document.querySelector('.search');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
  search.classList.toggle('active');
  input.focus();
}
