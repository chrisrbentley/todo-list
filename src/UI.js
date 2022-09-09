import { projectsList, formattedDate } from "./projects";

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

(function displayDefault() {
    const ul = document.createElement('ul');
    const defaultProj = document.createElement('li');
    projList.appendChild(ul);
    ul.appendChild(defaultProj);
    defaultProj.textContent = projectsList[0].project;
    defaultProj.className = 'project';

    defaultProj.addEventListener('click', () => {
        defName.textContent = projectsList[0].todos[0].title;
        defDetailBtn.textContent = 'Details';
        defDate.textContent = projectsList[0].todos[0].dueDate;
    })
    
})();
