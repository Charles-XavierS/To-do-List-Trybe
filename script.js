const buttonAdd = document.getElementById('criar-tarefa');
const inputSpace = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');

function addItem() {
  const li = document.createElement('li');
  li.classList.add('itens-list');
  li.innerHTML = inputSpace.value;
  toDoList.appendChild(li);
  inputSpace.value = '';
}

buttonAdd.addEventListener('click', addItem);
