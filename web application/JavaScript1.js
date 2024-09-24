// 获取 DOM 元素
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

// 添加任务
function addTask() {
    const task = taskInput.value.trim(); // 获取输入的任务内容
    if (task) {
        // 创建一个新的列表项
        const li = document.createElement('li');
        li.textContent = task;

        // 创建删除按钮
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li); // 删除任务
        };

        // 将按钮添加到列表项
        li.appendChild(deleteButton);
        taskList.appendChild(li); // 将列表项添加到任务列表

        taskInput.value = ''; // 清空输入框
    } else {
        alert('Please enter a task'); // 提示用户输入任务
    }
}
