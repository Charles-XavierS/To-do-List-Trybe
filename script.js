// Adiciona itens a lista, adiciona classe aos itens criados e limpa o valor do input, após clicar no botão

const buttonAdd = document.querySelector('#criar-tarefa');
const inputSpace = document.querySelector('#texto-tarefa');
const toDoList = document.querySelector('#lista-tarefas');

function addItem() {
  const newLi = document.createElement('li');
  newLi.innerHTML = inputSpace.value;
  toDoList.appendChild(newLi);
  inputSpace.value = '';
}
buttonAdd.addEventListener('click', addItem);

// Mudar background ao clicar nos itens

const lis = document.getElementsByTagName('li');

function selectedItem(event) {
  if (!event.target.classList.contains('list')) {
    for (const li of lis) {
      li.classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}
toDoList.addEventListener('click', selectedItem);

// Marcar os itens como riscados ao clicar duas vezeas

function lineThrough(event) {
  event.target.classList.toggle('completed');
}
toDoList.addEventListener('dblclick', lineThrough);

// Botão apagar tudo

const clearButton = document.getElementById('apaga-tudo');

function clearList() {
  toDoList.innerHTML = '';
}
clearButton.addEventListener('click', clearList);

// Botão remover finalizado
// Source: https://stackoverflow.com/questions/4777077/removing-elements-by-class-name

const finishedButton = document.getElementById('remover-finalizados');
const finishedTask = document.getElementsByClassName('completed');

function finishedTasks() {
  while (finishedTask.length > 0) {
    finishedTask[0].parentNode.removeChild(finishedTask[0]);
  }
}
finishedButton.addEventListener('click', finishedTasks);
