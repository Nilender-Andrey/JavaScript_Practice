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

                      <button class="task__btn task__btn_done"></button>
                      <button class="task__btn task__btn_delete"></button>
                    </li>`;

  todoList.insertAdjacentHTML('beforeend', taskHTML);

  addTaskInput.value = '';
  addTaskInput.focus();

  if (todoList.children.length > 1) {
    emptyList.classList.add('none');
  }
}

function todoListClickHandler(event) {
  const target = event.target;
  if (target.classList.contains('.task__btn_done')) {
  }
}

function deleteTask(params) {}
