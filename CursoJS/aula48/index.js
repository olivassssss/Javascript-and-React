
const inputTask = document.querySelector('.input-nova-tarefa');
const btnTask = document.querySelector('.btn-add-tarefa');
const tasks = document.querySelector('.tarefas');


function createElement() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTask.value) return;
        createTask(inputTask.value);
        clearInput();
    }
})

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDelete(li) {
    li.innerText += ' ';
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Apagar';
    deleteBtn.setAttribute('class', 'apagar');
    deleteBtn.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(deleteBtn);
}

function createTask(textInput) {
    const li = createElement()
    li.innerHTML = textInput;
    tasks.appendChild(li);
    clearInput();
    createDelete(li)
    saveTasks();
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    let taskList = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        createTask(task);
    }
}


document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        saveTasks()
    }
})

btnTask.addEventListener('click', function(e) {
    if(!inputTask.value) return;
    createTask(inputTask.value);
})

addSavedTasks()