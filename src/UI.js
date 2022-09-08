const body = document.querySelector('#body');
const headerTag = document.createElement('header');
const heading = document.createElement('h1');
const navBar = document.createElement('nav');
const topSec = document.createElement('div');
const projSec = document.createElement('div');
const projTasks = document.createElement('div');

heading.id = 'heading';
navBar.id = 'nav-bar';
topSec.id = 'top-section';
projSec.id = 'project-section';
projTasks.id = 'project-tasks-container'

body.appendChild(headerTag);
headerTag.appendChild(heading);
body.appendChild(navBar);
navBar.appendChild(topSec);
navBar.appendChild(projSec);
body.appendChild(projTasks);


heading.textContent = 'Todo List';

