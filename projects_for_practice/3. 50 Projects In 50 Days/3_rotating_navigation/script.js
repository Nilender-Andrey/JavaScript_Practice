const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', openMenu);

function openMenu() {
  container.classList.add('show-nav');
}
close.addEventListener('click', closeMenu);

function closeMenu() {
  container.classList.remove('show-nav');
}
