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
heading.textContent = 'Todo List';
projSecHead.textContent = 'Projects';
addProjBtn.textContent = '+ Add Project';
currentTask.textContent = 'All Tasks';


const ul = document.createElement('ul');
projList.append(ul);

function renderProjects() {
    for (let i = 0; i < projectsList.length; i++) {
        const currentProj = document.createElement('li');
        currentProj.className = 'project';
        currentProj.textContent = projectsList[i].title;
        ul.appendChild(currentProj);

        currentProj.addEventListener('click', () => {
            if (projectsList[i].todos.length > 0) {
                console.log('222');

                tasksBottom.innerHTML = '';
            
                const task = document.createElement('div');
                const taskName = document.createElement('div');
                const taskDetails = document.createElement('div');
                const detailsButton = document.createElement('button');
                const taskDate = document.createElement('div');
    
                tasksBottom.appendChild(task);
                task.appendChild(taskName);
                task.appendChild(taskDetails);
                taskDetails.appendChild(detailsButton);
                task.appendChild(taskDate);
    
                task.className = 'task';
                taskName.classList.add('task-item', 'task-name');
                taskDetails.classList.add('task-item', 'task-details');
                taskDate.classList.add('task-item', 'task-date');
    
                taskName.textContent = projectsList[i].todos[i].title;
                detailsButton.textContent = 'Details';
                taskDate.textContent = projectsList[i].todos[i].dueDate;


            } else {
                tasksBottom.innerHTML = '';
                const emptyProjCnt = document.createElement('div');
                const emptyProjP = document.createElement('p');
                emptyProjP.textContent = 'This project is empty.'

                emptyProjP.id = 'empty-project';

                tasksBottom.appendChild(emptyProjCnt);
                emptyProjCnt.appendChild(emptyProjP);
                
            }
            
        })
    }
};
renderProjects();

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
 
projFormBtn.addEventListener('click', function(event){
    event.preventDefault();
    ul.innerHTML = '';
    addProject();
})

//
const addTasksBtn = document.createElement('button');


export { projFormBtn, projectInput, renderProjects };