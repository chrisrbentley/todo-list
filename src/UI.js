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

headerTag.id = 'header-sec';
heading.id = 'heading';
navBar.id = 'nav-bar';
topSec.id = 'top-section';
projSec.id = 'project-container';
projTasks.id = 'tasks-container'
projSecHead.id = 'project-section-header';
addProjBtn.id = 'add-project-btn';
projList.id = 'project-list';

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

heading.textContent = 'Todo List';
projSecHead.textContent = 'Projects';
addProjBtn.textContent = 'Add Project';
