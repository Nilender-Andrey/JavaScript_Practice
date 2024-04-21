/* Вариант с учебного видео */
/* 
let fullHeight, innerHeight;

const progressBar = document.querySelector('.progress-bar__line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', fillProgressLine);

function fillProgressLine() {
  console.log(1213);
  fullHeight = document.body.scrollHeight;
  innerHeight = window.innerHeight;

  progressBar.style.width = (window.scrollY * 100) / (fullHeight - innerHeight) + '%';
}
 */

/* Мой вариант */
/* 
Повторное вычисления fullHeight и innerHeight 
происходит только после изменения размера окна
*/

/* Величина высоты содержимого элемента, включая содержимое, не видимое на экране из-за переполнения */
let fullHeight = document.body.scrollHeight;
/* Величина внутренней высоты окна в пикселях, включая высоту горизонтальной полосы прокрутки, если она имеется. */
let innerHeight = window.innerHeight;

const progressBar = document.querySelector('.progress-bar__line');

window.addEventListener('scroll', fillProgressLine);
window.addEventListener('resize', () => {
  fullHeight = document.body.scrollHeight;
  innerHeight = window.innerHeight;

  fillProgressLine();
});

function fillProgressLine() {
  /* window.scrollY - число пикселей, на которое документ пролистали в данный момент по вертикали. */
  progressBar.style.width = (window.scrollY * 100) / (fullHeight - innerHeight) + '%';
}
