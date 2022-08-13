const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.className = 'circle';
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.append(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
