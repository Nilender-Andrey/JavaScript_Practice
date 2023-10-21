const form = document.querySelector('#form');
const addTaskInput = form.querySelector('#add-task-input');
const todoList = document.querySelector('#todo-list');
const emptyList = document.querySelector('#nothing-to-do');

form.addEventListener('submit', addTask);
todoList.addEventListener('click', todoListClickHandler);

function addTask(event) {
  event.preventDefault();

  const taskText = addTaskInput.value;

  const taskHTML = `<li class="todo-list__item task">
                      <div class="task__name">${taskText}</div>
                      <div class="task__btns">
                        <button class="task__btn task__btn_done" data-action="done"></button>
                        <button class="task__btn task__btn_delete" data-action="delete"></button>
                      </div>
                    </li>`;

  todoList.insertAdjacentHTML('beforeend', taskHTML);

  addTaskInput.value = '';
  addTaskInput.focus();

  changeEmptyList();
}

function todoListClickHandler(event) {
  const target = event.target;

  if (target.dataset.action === 'delete') {
    const parentNode = target.closest('.task');
    deleteTask(parentNode);

    changeEmptyList();
  }

  if (target.dataset.action === 'done') {
    const parentNode = target.closest('.task');
    taskStatusToggle(parentNode);
  }
}

function deleteTask(parentNode) {
  parentNode.remove();
}

function changeEmptyList() {
  if (todoList.children.length > 1) {
    emptyList.classList.add('none');
  } else {
    emptyList.classList.remove('none');
  }
}

function taskStatusToggle(parentNode) {
  parentNode.classList.toggle('done');
}
