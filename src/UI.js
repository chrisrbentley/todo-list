import { head } from "lodash";
import { projectsList, formattedDate, addProject } from "./projects";
import { addTask, newTodo } from "./todo";

//basic skeleton
const body = document.getElementById('body');
const header = document.createElement('header');
const h1 = document.createElement('h1');
const main = document.createElement('main');
const nav = document.createElement('nav');
const content = document.createElement('div');

h1.textContent = 'Todo List';

content.id = 'content';

body.appendChild(header);
header.appendChild(h1);
body.appendChild(main);
main.appendChild(nav);
main.appendChild(content);

//sidebar content
const navTop = document.createElement('div');
const navBottom = document.createElement('div');
const projectsContainer = document.createElement('div');
const projUL = document.createElement('ul');
const newProjBtn = document.createElement('button');

navTop.id = 'nav-top';
navBottom.id = 'nav-bottom';
projectsContainer.id = 'projects-container';
newProjBtn.id = 'add-project-btn';

newProjBtn.textContent = "+ Add Project";

nav.append(navTop, navBottom)
navBottom.appendChild(projectsContainer);
projectsContainer.appendChild(projUL);
navBottom.appendChild(newProjBtn);
