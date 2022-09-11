import { projectsList, formattedDate, addProject } from "./projects";

const body = document.querySelector('#body');
const headerTag = document.createElement('header');
const heading = document.createElement('h1');
const main = document.createElement('main');
const navBar = document.createElement('nav');
const topSec = document.createElement('div');
const projSec = document.createElement('div');
const projTasks = document.createElement('div');
const projList = document.createElement('div');
const projSecHead = document.createElement('h3');
const addProjBtn = document.createElement('button');
const tasksTop = document.createElement('div');
const tasksBottom = document.createElement('div');
const currentTask = document.createElement('h3');
const defaultTask = document.createElement('div');
const defName = document.createElement('div');
const defDetails = document.createElement('div');
const defDetailBtn = document.createElement('button');
const defDate = document.createElement('div');

main.id = 'main';
headerTag.id = 'header-sec';
heading.id = 'heading';
navBar.id = 'nav-bar';
topSec.id = 'top-section';
projSec.id = 'project-container';
projTasks.id = 'tasks-container';
projSecHead.id = 'project-section-header';
addProjBtn.id = 'add-project-btn';
projList.id = 'project-list';
tasksTop.id = 'tasks-top';
tasksBottom.id = 'tasks-bottom';
currentTask.id = 'current-task';
defaultTask.id = 'default-task';

defaultTask.className = 'task';
defName.classList.add('task-item', 'task-name');
defDetails.classList.add('task-item', 'task-details');
defDate.classList.add('task-item', 'task-date');
defDetailBtn.classList.add('detail-btn');

body.appendChild(headerTag);
headerTag.appendChild(heading);
body.appendChild(main);
main.appendChild(navBar);
navBar.appendChild(topSec);
navBar.appendChild(projSec);
main.appendChild(projTasks);
projSec.appendChild(projSecHead);
projSec.appendChild(projList);
projSec.appendChild(addProjBtn);
projTasks.appendChild(tasksTop);
projTasks.appendChild(tasksBottom);
tasksTop.appendChild(currentTask);
tasksBottom.appendChild(defaultTask);
defaultTask.appendChild(defName);
defaultTask.appendChild(defDetails);
defaultTask.appendChild(defDate);
defDetails.appendChild(defDetailBtn);

heading.textContent = 'Todo List';
projSecHead.textContent = 'Projects';
addProjBtn.textContent = '+ Add Project';
currentTask.textContent = 'All Tasks';

/* (function displayDefault() {
    const ul = document.createElement('ul');
    const defaultProj = document.createElement('li');
    projList.appendChild(ul);
    ul.appendChild(defaultProj);
    defaultProj.textContent = projectsList[0].title;
    defaultProj.className = 'project';

    defaultProj.addEventListener('click', () => {
        defName.textContent = projectsList[0].todos[0].title;
        defDetailBtn.textContent = 'Details';
        defDate.textContent = projectsList[0].todos[0].dueDate;
    })
})(); */

const ul = document.createElement('ul');
projList.append(ul);

(function renderProjects() {
    for (let i = 0; i < projectsList.length; i++) {
        const currentProj = document.createElement('li');
        currentProj.className = 'project';
        currentProj.textContent = projectsList[i].title;
        ul.appendChild(currentProj);
    }
})();






//create modal

const modalCnt = document.createElement('div');
modalCnt.id = 'modal-container';
body.appendChild(modalCnt);

const modalTop = document.createElement('div');
modalTop.id = 'modal-top';
modalCnt.appendChild(modalTop);

const modalH3 = document.createElement('div');
modalH3.classList.add('modal-h3');
modalTop.appendChild(modalH3);
modalH3.textContent = 'Create a new project'

const exitBtn = document.createElement('button');
exitBtn.classList.add('exit-button');
exitBtn.textContent = 'X';
modalTop.appendChild(exitBtn);

const projFormCnt = document.createElement('div');
projFormCnt.id = 'proj-form-container';
modalCnt.appendChild(projFormCnt);


(function loadModal() {
    addProjBtn.addEventListener('click', () => {
        modalCnt.style.display = 'flex';
        modalCnt.style.flexDirection = 'column';
        main.style.filter = 'blur(5px)';
        headerTag.style.filter = 'blur(5px)';
    })
    exitBtn.addEventListener('click', () => {
        modalCnt.style.display = 'none';
        main.style.filter = 'none';
        headerTag.style.filter = 'none';
    }) 
})();


//create form

const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
const projectLable = document.createElement('label');
const projectInput = document.createElement('input');
const projFormBtn = document.createElement('button');


form.classList.add('form');
form.setAttribute("action", "/");
form.setAttribute("method", "get");
projFormBtn.classList.add("submit");


projectLable.setAttribute("for", "title");
projectInput.setAttribute("type", "text");
projectInput.setAttribute("name", "title");
projectInput.setAttribute("id", "title");
projectInput.setAttribute("required", "");
projFormBtn.setAttribute("type", "submit");



projectLable.innerHTML = 'Title:'
projFormBtn.innerHTML = 'Submit';

projFormCnt.appendChild(form);
form.appendChild(fieldset);
fieldset.appendChild(projectLable);
fieldset.appendChild(projectInput);
fieldset.appendChild(projFormBtn);
 
projFormBtn.addEventListener('click', () => {
    addProject()
})

//
const addTasksBtn = document.createElement('button');


export { projFormBtn, projectInput };