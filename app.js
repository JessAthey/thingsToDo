const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText !== '') {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    todos.push(todo);
    input.value = '';
    renderTodoList();
  }
});

function renderTodoList() {
  list.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = todo.id;
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todos = todos.filter(item => item.id !== todo.id);
      renderTodoList();
    });
    const label = document.createElement('label');
    label.htmlFor = todo.id;
    label.textContent = todo.text;
    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
  });
}
