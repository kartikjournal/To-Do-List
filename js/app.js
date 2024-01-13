        // In-memory array to store tasks
        var tasks = [];

        // Function to add a new task
        function addTask() {
            var taskInput = document.getElementById('taskInput');
            var taskList = document.getElementById('taskList');

            if (taskInput.value.trim() === '') {
                alert('Please enter a task!');
                return;
            }

            // Create a new task item
            var taskItem = document.createElement('li');
            taskItem.className = 'taskItem';

            // Append task text to task item
            taskItem.textContent = taskInput.value;

            // Create a delete button
            var deleteButton = document.createElement('button');
            deleteButton.className = 'deleteButton';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                // Remove the task item when delete button is clicked
                taskList.removeChild(taskItem);
                // Remove the task from the in-memory array
                tasks = tasks.filter(task => task !== taskInput.value);
            };

            // Append delete button to task item
            taskItem.appendChild(deleteButton);

            // Append the task item to the task list
            taskList.appendChild(taskItem);

            // Add the task to the in-memory array
            tasks.push(taskInput.value);

            // Clear the input field
            taskInput.value = '';
        }