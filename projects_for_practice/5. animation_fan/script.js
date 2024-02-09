/* Предложенный вариант (При анимации наблюдаются рывки) */
/* 
const buttonOn = document.querySelector('button.on');
const buttonOff = document.querySelector('button.off');
const img = document.querySelector('.wrap-img > img');

img.classList.add('image-animation');

buttonOn.addEventListener('click', () => {
  img.style.animationPlayState = 'running';
});

buttonOff.addEventListener('click', () => {
  img.style.animationPlayState = 'paused';
});

document.querySelector('.buttons').addEventListener('click', (event) => {
  if (event.target.classList.contains('speed')) {
    let speed = event.target.getAttribute('data-speed');
    img.style.animationDuration = speed + 's';
  }
});
 */

/* Более интересный вариант */

const buttonOn = document.querySelector('button.on');
const buttonOff = document.querySelector('button.off');
const img = document.querySelector('.wrap-img > img');

buttonOff.disabled = true;

let duration = 3;
let rotationAngle = 0;
let requestAnimationFrameId = null;

function update() {
  rotationAngle += 360 / duration / 60;
  img.style.transform = `rotate(${rotationAngle}deg)`;

  requestAnimationFrameId = requestAnimationFrame(update);
}

document.querySelector('.buttons').addEventListener('click', (event) => {
  if (event.target.classList.contains('speed')) {
    duration = event.target.getAttribute('data-speed');
  }
});

buttonOn.addEventListener('click', () => {
  if (requestAnimationFrameId === null) {
    requestAnimationFrameId = requestAnimationFrame(update);
    buttonOn.disabled = true;
    buttonOff.disabled = false;
  }
});

buttonOff.addEventListener('click', () => {
  cancelAnimationFrame(requestAnimationFrameId);
  requestAnimationFrameId = null;
  buttonOn.disabled = false;
  buttonOff.disabled = true;
});
