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

//create project modal
const projModal = document.createElement('div');
const projModalTop = document.createElement('div');
const projModalHeader = document.createElement('h3');
const projFormCnt = document.createElement('div');

projModal.id = 'proj-modal-cnt';
projModalTop.id = 'proj-modal-top';
projModalHeader.id = 'proj-modal-header';
projFormCnt.id = 'proj-form-container';

projModalHeader.textContent = 'Add a new project'

body.appendChild(projModal);
projModal.appendChild(projModalTop);
projModalTop.appendChild(projModalHeader);
projModal.appendChild(projFormCnt);

//create form
const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
const projectLabel = document.createElement('label');
const projectInput = document.createElement('input');
const projFormBtn = document.createElement('button');

form.classList.add('form');
form.setAttribute("action", "/");
form.setAttribute("method", "get");
projFormBtn.classList.add("submit");

projectLabel.setAttribute("for", "title");
projectInput.setAttribute("type", "text");
projectInput.setAttribute("name", "title");
projectInput.setAttribute("id", "title");
projectInput.setAttribute("required", "");
projFormBtn.setAttribute("type", "submit");

projectLabel.innerHTML = 'Title:';
projFormBtn.innerHTML = 'Submit';

projFormCnt.appendChild(form);
form.appendChild(fieldset);
fieldset.appendChild(projectLabel);
fieldset.appendChild(projectInput);
fieldset.appendChild(projFormBtn);

projModal.style.display = 'none';

export { newProjBtn, projUL, projModal };