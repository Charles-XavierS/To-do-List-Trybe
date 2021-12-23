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
