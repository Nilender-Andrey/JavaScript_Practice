const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

/* пользователь начал перетаскивать элемент */
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => (this.className = 'invisible'), 0);
}

/* завершается перетаскивание (например, отпускается кнопка мыши или нажимается Escape; */
function dragEnd() {
  this.className = 'fill';
}

/* элемент перетаскивается над допустимой целью сброса каждые несколько сотен миллисекунд */
function dragOver(e) {
  e.preventDefault();
}

/* перетаскиваемый элемент попадает в допустимую цель сброса */
function dragEnter(e) {
  e.preventDefault();

  this.classList.add('hovered');
}

/* перетаскиваемый элемент покидает допустимую цель сброса */
function dragLeave() {
  console.log('dragLeave');

  this.classList.remove('hovered');
}

/* элемент сброшен в допустимую зону сброса */
function dragDrop() {
  this.append(fill);
  this.classList.remove('hovered');
}
