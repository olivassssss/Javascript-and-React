
const inputTask = document.querySelector('.input-nova-tarefa');
const btnTask = document.querySelector('.btn-add-tarefa');
const tasks = document.querySelector('.tarefas');


function createElement() {
    const li = document.createElement('li');
    return li;
}

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
} addSavedTasks();

// EVENT LISTENERS

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

inputTask.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        if(!inputTask.value) return;
        createTask(inputTask.value);
        clearInput();
    }
})

// TIME FUNCTIONS

function getTime() {
    let data = new Date();

    return data.toLocaleTimeString('pt-PT', {
        hour12: false,
    });
}

function timeShow() {
    const timer = document.querySelector('.timer');
    timer.innerHTML = getTime();

    const interval = setInterval(function () {
        console.log(timeShow());
    }, 1000)
} timeShow();


// DATE FUNCTIONS

function getDate() {
    let data = new Date();
    const opcoes = {
        dateStyle: 'full',
        timeStyle: 'short',
    };

    return data.toLocaleDateString("pt-PT");
}

function showDate() {
    const date = document.querySelector('.date');
    date.innerHTML = `${getDate()}`;
    
} showDate();



