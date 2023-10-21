/* 
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
 */

//* делегирование */

const faqContainer = document.querySelector('.faq-container');

faqContainer.addEventListener('click', clickHandler);

function clickHandler(event) {
  const target = event.target;
  const button = target.closest('.faq-toggle');

  button?.closest('.faq')?.classList.toggle('active');
}
