const taskKey = '@tasks';
const modal = document.querySelector('main dialog');

// Função para adicionar tarefa
function addTask(event) {
  event.preventDefault(); // Evita o recarregamento da página
  const taskId = new Date().getTime();
  const taskList = document.querySelector('#taskList');

  const form = document.querySelector('#taskForm');
  const formData = new FormData(form);

  const taskTitle = formData.get('title');
  const taskDescription = formData.get('description');

  const li = document.createElement('li');

  li.id = taskId;
  li.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>${taskDescription}</p>
  `;

  taskList.appendChild(li);

  // Salvar tarefas no localStorage
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  tasks.push({ title: taskTitle, description: taskDescription });
  localStorage.setItem(taskKey, JSON.stringify(tasks));

  form.reset();
}

// Carregar tarefas do localStorage ao recarregar a página
window.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
  const taskList = document.querySelector('#taskList');
  taskList.innerHTML = tasks
    .map(
      task =>
        `<li><div><h2>${task.title}</h2><button title="Editar tarefa" class="open-modal">✏️</button></div><p>${task.description}</p></li>`
    )
    .join('');
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
      modal.showModal();
    });
  });
});

const cancelButton = document.querySelector('#cancel-update');
cancelButton.addEventListener('click', e => {
  e.preventDefault();
  modal.close();
});

const updateButton = document.querySelector('#update-task');
updateButton.addEventListener('click', e => {
  e.preventDefault();
});
