const body = document.querySelector('body');
const panels = body.querySelectorAll('.panel');

body.addEventListener('click', clickHandler);

function clickHandler(event) {
  const target = event.target;

  if (target.classList.contains('panel')) {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });

    target.classList.add('active');
  }
}
