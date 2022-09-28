import { add } from 'lodash';
import { projectsList, addProject } from './projects';
import { addTask } from './addTask';
import { newProjBtn, projUL, projModal, projFormBtn, projectInput, closeBtn, content, taskModalCnt, subTaskBtn } from './UI';


let tempID;
function renderAll() {
    projUL.innerHTML = '';
    for (let i = 0; i < projectsList.length; i++) {
        let project = document.createElement('li');
        project.className = 'project';
        project.id = projectsList[i].id;
        project.textContent = projectsList[i].title;
        projUL.appendChild(project);
        console.log(project);

        project.addEventListener('click', () => {
            let filteredList = projectsList.filter(function(fList) {
                return fList.id == project.id;
            })
            if (filteredList[0].todos.length > 0) {
                content.innerHTML = '';
                for (let i = 0; i < filteredList[0].todos.length; i++) {
                    console.log(filteredList[0].todos[i]);
                    const task = document.createElement('div');
                    const taskName = document.createElement('div');
                    const taskDetails = document.createElement('div');
                    const detailsButton = document.createElement('button');
                    const taskDate = document.createElement('div');

                    content.appendChild(task);
                    task.appendChild(taskName);
                    task.appendChild(taskDetails);
                    taskDetails.appendChild(detailsButton);
                    task.appendChild(taskDate);

                    task.className = 'task';
                    taskName.classList.add('task-item', 'task-name');
                    taskDetails.classList.add('task-item', 'task-details');
                    taskDate.classList.add('task-item', 'task-date');

                    taskName.textContent = filteredList[0].todos[i].title;
                    detailsButton.textContent = 'Details';
                    taskDate.textContent = filteredList[0].todos[i].dueDate;
                }
                    const newTask = document.createElement('btn');
                    content.appendChild(newTask);
                    newTask.id = project.id;
                    tempID = newTask.id;
                    //console.log(tempID);
                    newTask.className = 'new-task-btn';
                    newTask.textContent = '+ New Task';
                    newTask.addEventListener('click', displayTaskModal);
            } else {
                console.log('This project is empty.');
                content.innerHTML = '';
                const emptyProjCnt = document.createElement('div');
                const emptyProjP = document.createElement('p');
                emptyProjP.textContent = 'This project is empty.'

                emptyProjP.id = 'empty-project';

                content.appendChild(emptyProjCnt);
                emptyProjCnt.appendChild(emptyProjP);

                const newTask = document.createElement('btn');
                content.appendChild(newTask);
                newTask.className = 'new-task-btn';
                newTask.id = project.id;
                tempID = newTask.id;
                newTask.textContent = '+ New Task';
                newTask.addEventListener('click', displayTaskModal);
            }
        })
    }
}
renderAll();

(function displayProjModal() {
    newProjBtn.addEventListener('click', () => {
        projModal.style.display = 'flex';
    })
})();

function displayTaskModal() {
    taskModalCnt.style.display = 'flex';
}

function addProj() {
    projFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        addProject();
        console.log(projectsList);
        projectInput.value = '';
        projModal.style.display = 'none';
        renderAll();
    })
}
addProj();

function addNewTask() {
    subTaskBtn.addEventListener('click', function(event) {
        event.preventDefault();
        addTask();
    })
}
addNewTask();

console.log(projectsList);
//console.log(tempID);

function closeProjModal() {
    closeBtn.addEventListener('click', () => {
        projModal.style.display = 'none';
    })
}
closeProjModal();


export { tempID };