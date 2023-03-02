const form = document.querySelector('form');
      const newTaskInput = document.querySelector('#new-task');
      const taskList = document.querySelector('#task-list');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
      });

      function addTask(taskText) {
        if (taskText !== "") {
         const taskItem = document.createElement('li');
         taskItem.className = "taskItem"
         taskItem.textContent = taskText;
         taskList.appendChild(taskItem);
         taskItem.addEventListener('click', () => {
           removeTask(taskItem);
         });
        }
      }

      function removeTask(taskItem) {
        taskItem.parentNode.removeChild(taskItem);
      }