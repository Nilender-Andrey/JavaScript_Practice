const images = ['11.jpg', '22.jpg', '33.jpg', '44.jpg', '55.jpg'];
const options = {
  ratioImg: 1.778, // ширина/высоту (1920/1080)
  duration: 1000, //время анимации
};

let activeImageIndex = 0;
let flag = true;
const sliderPlace = document.querySelector('.slider__place');
const widthOffset = document.querySelector('.slider').clientWidth;

sliderPlace.style.width = 3 * widthOffset + 'px';
sliderPlace.style.height = widthOffset / options.ratioImg + 'px';
sliderPlace.style.left = -widthOffset + 'px';

function initSlider() {
  const imgElement = document.createElement('img');
  imgElement.alt = '';
  imgElement.src = './images/' + images[activeImageIndex];
  sliderPlace.append(imgElement);
}

function generateNextImage() {
  let nextImageIndex = activeImageIndex + 1;

  if (nextImageIndex >= images.length) nextImageIndex = 0;

  const imgElement = document.createElement('img');
  imgElement.alt = '';
  imgElement.src = './images/' + images[nextImageIndex];
  sliderPlace.append(imgElement);
}

function generatePrevImage(w = false) {
  let prevImageIndex = activeImageIndex - 1;

  if (prevImageIndex < 0) prevImageIndex = images.length - 1;

  const imgElement = document.createElement('img');
  imgElement.alt = '';
  imgElement.src = './images/' + images[prevImageIndex];

  if (w) {
    imgElement.style.width = 0;
  }

  sliderPlace.prepend(imgElement);
}

function generateNextSlide() {
  if (!flag) {
    return;
  }
  flag = !flag;

  activeImageIndex++;
  if (activeImageIndex >= images.length) activeImageIndex = 0;
  generateNextImage();

  startAnimate({
    duration: options.duration,
    draw: drawNextSlide,

    removeElement: document.querySelector('.slider__place img'),
  });
}

function generatePrevSlide() {
  if (!flag) {
    return;
  }
  flag = !flag;

  activeImageIndex--;
  if (activeImageIndex < 0) activeImageIndex = images.length - 1;
  generatePrevImage(true);

  startAnimate({
    duration: options.duration,
    draw: drawPrevSlide,
    removeElement: document.querySelector('.slider__place img:last-child'),
  });
}

document.querySelector('.slider__next-button').addEventListener('click', generateNextSlide);
document.querySelector('.slider__prev-button').addEventListener('click', generatePrevSlide);

initSlider();
generateNextImage();
generatePrevImage();

/**
 * @typedef {Object} AnimateProps
 * @property {number} duration - Время анимации
 * @property {Function} draw - Функция анимации
 * @property {Element} removeElement - Удаляемый элемент
 */

/**
 * Начинает анимацию
 * @param {AnimateProps} animateProps
 */
function startAnimate({ duration, draw, removeElement }) {
  const start = performance.now();

  requestAnimationFrame(animateCallback(start, { duration, draw, removeElement }));
}

/**
 * @description Контролирует анимацию (вызывает  )
 * @param {number} start - Время начала анимации
 * @param {AnimateProps} animateProps
 */
function animateCallback(start, { duration, draw, removeElement }) {
  return function (time) {
    let step = (time - start) / duration;

    if (step > 1) {
      step = 1;
    }

    draw(step);

    if (step < 1) {
      requestAnimationFrame(animateCallback(start, { duration, draw, removeElement }));
    } else {
      removeElement.remove();
      flag = true;
    }
  };
}

/**
 * @description Отрисовка анимации шага при смене предыдущего слайда
 * @param {number} step - Шаг анимации
 */
function drawPrevSlide(step) {
  document.querySelector('.slider__place img').style.width = widthOffset * step + 'px';
}

/**
 * @description Отрисовка анимации шага при смене следующего слайда
 * @param {number} step - Шаг анимации
 */
function drawNextSlide(step) {
  document.querySelector('.slider__place img').style.width = widthOffset * (1 - step) + 'px';
}
