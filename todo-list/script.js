const addTask = () => {
  taskList = localStorage.getItem('tasks')
    ? [...JSON.parse(localStorage.getItem('tasks'))]
    : [];
  var li = document.createElement('li');
  var inputValue = document.querySelector('#task-input').value;

  taskList.push(inputValue);

  localStorage.setItem('tasks', JSON.stringify(taskList));

  var node = document.createTextNode(inputValue);
  li.appendChild(node);

  document.getElementById('task-list').appendChild(li);
};

document
  .querySelector('#task-input')
  .addEventListener('keypress', keypressed => {
    if (keypressed.key === 'Enter') addTask();
  });

(() => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  for (const task in taskList) {
    var node = document.createTextNode(task);
    li.appendChild(node);
  }
})();
