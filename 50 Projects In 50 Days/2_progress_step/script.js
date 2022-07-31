'use strict';

const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive =
    currentActive >= circles.length ? circles.length : ++currentActive;

  update();
});

prevBtn.addEventListener('click', () => {
  currentActive = currentActive <= 1 ? 1 : --currentActive;

  update();
});

function update() {
  circlesAddRemoveActive();
  calcWidthActiveProgress();
  enableDisableButtons();
}

function calcWidthActiveProgress() {
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

function enableDisableButtons() {
  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}

function circlesAddRemoveActive() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}
