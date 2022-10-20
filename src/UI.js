// basic skeleton
const body = document.getElementById('body');
const header = document.createElement('header');
const h1 = document.createElement('h1');
const middle = document.createElement('div');
const sidebar = document.createElement('div');
const main = document.createElement('main');
const nav = document.createElement('nav');
const tasks = document.createElement('div');

h1.textContent = 'Todo List';

tasks.id = 'tasks-container';
middle.id = 'middle';
sidebar.id = 'sidebar';

body.appendChild(header);
header.appendChild(h1);
body.appendChild(middle);
middle.appendChild(sidebar);
sidebar.appendChild(nav);
middle.appendChild(main);
main.appendChild(tasks);

// sidebar content
const projectsContainer = document.createElement('div');
const projUL = document.createElement('ul');
const newProjBtn = document.createElement('button');

projectsContainer.id = 'projects-container';
newProjBtn.id = 'add-project-btn';

newProjBtn.textContent = '+ Add Project';

nav.appendChild(projectsContainer);
projectsContainer.appendChild(projUL);
nav.appendChild(newProjBtn);

// create project modal
const projModal = document.createElement('div');
const projModalTop = document.createElement('div');
const projModalHeader = document.createElement('h3');
const projFormCnt = document.createElement('div');
const closeBtn = document.createElement('button');

projModal.id = 'proj-modal-cnt';
projModalTop.id = 'proj-modal-top';
projModalHeader.id = 'proj-modal-header';
projFormCnt.id = 'proj-form-container';
closeBtn.id = 'exit-button';

projModalHeader.textContent = 'Add a new project';
closeBtn.textContent = 'X';

body.appendChild(projModal);
projModal.appendChild(projModalTop);
projModalTop.appendChild(projModalHeader);
projModal.appendChild(projFormCnt);
projModalTop.appendChild(closeBtn);

// create form
const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
const projectLabel = document.createElement('label');
const projectInput = document.createElement('input');
const projFormBtn = document.createElement('button');

form.classList.add('form');
form.setAttribute('action', '/');
form.setAttribute('method', 'get');
projFormBtn.classList.add('submit');

projectLabel.setAttribute('for', 'title');
projectInput.setAttribute('type', 'text');
projectInput.setAttribute('name', 'title');
projectInput.setAttribute('id', 'title');
projectInput.setAttribute('required', '');
projFormBtn.setAttribute('type', 'submit');

projectLabel.innerHTML = 'Title:';
projFormBtn.innerHTML = 'Submit';

projFormCnt.appendChild(form);
form.appendChild(fieldset);
fieldset.appendChild(projectLabel);
fieldset.appendChild(projectInput);
fieldset.appendChild(projFormBtn);

projModal.style.display = 'none';

/// ///

const taskModalCnt = document.createElement('div');
const taskModalTop = document.createElement('div');
const taskModalBtm = document.createElement('div');
const taskModalHeader = document.createElement('h3');
const taskModalBtn = document.createElement('btn');
const taskForm = document.createElement('form');
const taskFieldset = document.createElement('fieldset');

taskModalCnt.id = 'task-modal-container';
taskModalTop.id = 'task-modal-top';
taskModalHeader.id = 'task-modal-header';
taskModalBtn.id = 'task-modal-button';
taskModalBtm.id = 'task-modal-bottom';
taskFieldset.id = 'task-fieldset';

taskForm.setAttribute('action', '/');
taskForm.setAttribute('method', 'get');

taskModalHeader.textContent = 'Add a new task';
taskModalBtn.textContent = 'X';

body.appendChild(taskModalCnt);
taskModalCnt.appendChild(taskModalTop);
taskModalCnt.appendChild(taskModalBtm);
taskModalTop.appendChild(taskModalHeader);
taskModalTop.appendChild(taskModalBtn);
taskModalBtm.appendChild(taskForm);
taskForm.appendChild(taskFieldset);

const titleLabel = document.createElement('label');
const titleInput = document.createElement('input');
titleLabel.setAttribute('for', 'title');
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('name', 'title');
titleLabel.textContent = 'Title:';
taskFieldset.appendChild(titleLabel);
taskFieldset.appendChild(titleInput);

const descriptionLabel = document.createElement('label');
const descriptionInput = document.createElement('input');
descriptionLabel.setAttribute('for', 'description');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('name', 'description');
descriptionLabel.textContent = 'Details:';

taskFieldset.appendChild(descriptionLabel);
taskFieldset.appendChild(descriptionInput);

const dueDateLabel = document.createElement('label');
const dueDateInput = document.createElement('input');
dueDateLabel.setAttribute('for', 'duedate');
dueDateInput.setAttribute('type', 'date');
dueDateInput.setAttribute('name', 'duedate');
dueDateInput.id = 'due-date';
dueDateLabel.textContent = 'Due Date:';

taskFieldset.appendChild(dueDateLabel);
taskFieldset.appendChild(dueDateInput);

const priorityLabel = document.createElement('label');
const priorityInput = document.createElement('select');
priorityLabel.setAttribute('for', 'priority');
priorityInput.setAttribute('name', 'priority');
priorityLabel.textContent = 'Priority:';

const emptyOpt = document.createElement('option');
const highOpt = document.createElement('option');
const mediumOpt = document.createElement('option');
const lowOpt = document.createElement('option');

highOpt.value = 'high';
mediumOpt.value = 'medium';
lowOpt.value = 'low';

highOpt.textContent = 'High';
mediumOpt.textContent = 'Medium';
lowOpt.textContent = 'Low';

priorityInput.appendChild(emptyOpt);
priorityInput.appendChild(highOpt);
priorityInput.appendChild(mediumOpt);
priorityInput.appendChild(lowOpt);

taskFieldset.appendChild(priorityLabel);
taskFieldset.appendChild(priorityInput);

const subTaskBtn = document.createElement('button');
subTaskBtn.setAttribute('type', 'submit');
subTaskBtn.className = 'submit';
subTaskBtn.textContent = 'Submit';
taskFieldset.appendChild(subTaskBtn);

taskModalCnt.style.display = 'none';

export {
  body,
  main,
  header,
  newProjBtn,
  projUL,
  projModal,
  projFormBtn,
  projectInput,
  closeBtn,
  tasks,
  taskModalCnt,
  taskModalBtn,
  subTaskBtn,
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
  sidebar,
};
