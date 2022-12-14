/* eslint-disable wrap-iife */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-use-before-define */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import { projectsList, addProject } from './projects';
// eslint-disable-next-line import/no-cycle
import { addTask } from './addTask';
import {
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
  menu,
} from './UI';

let project;
let trash;
let deleteProjBtn;

window.addEventListener('load', () => {
  if (localStorage.length > 0) {
    const storedArr = JSON.parse(localStorage.getItem('projectsList'));
    console.log(storedArr);
    for (let i = 0; i < storedArr.length; i++) {
      projectsList.push(storedArr[i]);
    }
  }
  renderProjects();
});

function renderProjects() {
  projUL.innerHTML = '';
  console.log(projectsList);
  for (let i = 0; i < projectsList.length; i++) {
    project = document.createElement('li');
    project.className = 'project';
    project.id = projectsList[i].id;
    project.textContent = projectsList[i].title;
    projUL.appendChild(project);
    getCurrentProj();
  }
}

let currentProj;
let currentIndex;
function getCurrentProj() {
  project.addEventListener('click', (e) => {
    currentProj = e.target.id;
    currentIndex = projectsList.findIndex((object) => object.id == currentProj);
    renderTasks();
  });
}

function renderTasks() {
  if (projectsList[currentIndex].todos.length > 0) {
    main.innerHTML = '';
    tasks.innerHTML = '';
    main.appendChild(tasks);
    for (let i = 0; i < projectsList[currentIndex].todos.length; i++) {
      const task = document.createElement('div');
      const taskLeft = document.createElement('div');
      const taskRight = document.createElement('div');
      const taskName = document.createElement('div');
      // const taskDetails = document.createElement('div');
      const detailsButton = document.createElement('button');
      const taskDate = document.createElement('div');
      trash = document.createElement('img');
      tasks.appendChild(task);
      task.appendChild(taskLeft);
      task.appendChild(taskRight);
      taskLeft.appendChild(taskName);
      taskRight.appendChild(detailsButton);
      taskRight.appendChild(taskDate);
      taskRight.appendChild(trash);
      task.className = 'task';
      taskLeft.className = 'task-left';
      taskRight.className = 'task-right';
      taskName.classList.add('task-item', 'task-name');
      // taskDetails.classList.add('task-item', 'task-details');
      detailsButton.id = project.id;
      detailsButton.className = 'details';
      taskDate.classList.add('task-item', 'task-date');
      trash.src = '/src/img/trash-icon.svg';
      trash.id = 'delete';
      trash.className = projectsList[currentIndex].todos[i].id;
      taskName.textContent = projectsList[currentIndex].todos[i].title;
      detailsButton.textContent = 'Details';
      taskDate.textContent = projectsList[currentIndex].todos[i].dueDate;
      detailsButton.addEventListener('click', () => {
        const detailsContainer = document.createElement('div');
        const detailsTop = document.createElement('div');
        const closeDetails = document.createElement('button');
        const detailsContent = document.createElement('div');
        const detailsTitle = document.createElement('div');
        const detailsDescription = document.createElement('div');
        const detailsDate = document.createElement('div');
        const detailsPriority = document.createElement('div');

        detailsContainer.className = 'details-container';
        detailsContent.className = 'details-content';
        detailsTop.className = 'details-top';
        detailsTitle.id = 'details-title';
        detailsDescription.id = 'details-description';
        detailsDate.id = 'details-date';
        detailsPriority.id = 'details-priority';

        closeDetails.textContent = 'X';
        detailsTitle.textContent = projectsList[currentIndex].todos[i].title;
        detailsDescription.textContent = `Description: ${projectsList[currentIndex].todos[i].description}`;
        detailsDate.textContent = `Due Date: ${projectsList[currentIndex].todos[i].dueDate}`;
        detailsPriority.textContent = `Priority: ${projectsList[currentIndex].todos[i].priority}`;

        body.appendChild(detailsContainer);
        detailsContainer.appendChild(detailsTop);
        detailsContainer.appendChild(detailsContent);
        detailsTop.appendChild(detailsTitle);
        detailsTop.appendChild(closeDetails);
        detailsContent.appendChild(detailsDescription);
        detailsContent.appendChild(detailsDate);
        detailsContent.appendChild(detailsPriority);
        main.style.filter = 'blur(4px)';
        header.style.filter = 'blur(4px)';
        sidebar.style.filter = 'blur(4px)';

        closeDetails.addEventListener('click', () => {
          detailsContainer.remove();
          main.style.filter = 'none';
          header.style.filter = 'none';
          sidebar.style.filter = 'none';
        });
      });
      deleteTask();
    }
    const newTask = document.createElement('btn');
    tasks.appendChild(newTask);
    newTask.id = project.id;
    newTask.className = 'new-task-btn';
    newTask.textContent = '+ New Task';
    newTask.addEventListener('click', displayTaskModal);
  } else {
    main.innerHTML = '';
    const emptyProjCnt = document.createElement('div');
    const emptyProjP = document.createElement('p');
    // eslint-disable-next-line operator-linebreak
    emptyProjP.textContent =
      'This project is empty. You can delete it or add a new task.';
    emptyProjP.id = 'empty-project';

    main.appendChild(emptyProjCnt);
    emptyProjCnt.appendChild(emptyProjP);

    const newTask = document.createElement('button');
    main.appendChild(newTask);
    newTask.className = 'new-task-btn';
    newTask.id = project.id;
    newTask.textContent = '+ New Task';
    // eslint-disable-next-line no-use-before-define
    newTask.addEventListener('click', displayTaskModal);

    deleteProjBtn = document.createElement('button');
    main.appendChild(deleteProjBtn);
    deleteProjBtn.textContent = 'Delete Project';
    deleteProjBtn.className = 'delete-button';
    deleteProjBtn.id = project.id;
    deleteProject();
  }
}

function deleteProject() {
  deleteProjBtn.addEventListener('click', () => {
    // const projClass = e.target.className;
    projectsList.splice(currentIndex, 1);
    console.log(projectsList);
    renderProjects();
    main.innerHTML = '';
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  });
}

function displayProjModal() {
  newProjBtn.addEventListener('click', () => {
    projModal.style.display = 'flex';
    main.style.filter = 'blur(4px)';
    header.style.filter = 'blur(4px)';
    sidebar.style.filter = 'blur(4px)';
  });
}
displayProjModal();

function displayTaskModal() {
  taskModalCnt.style.display = 'flex';
  main.style.filter = 'blur(4px)';
  header.style.filter = 'blur(4px)';
  sidebar.style.filter = 'blur(4px)';
}

function addProj() {
  projFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addProject();
    projectInput.value = '';
    projModal.style.display = 'none';
    main.style.filter = 'none';
    sidebar.style.filter = 'none';
    header.style.filter = 'none';
    renderProjects();
  });
}
addProj();

function addNewTask() {
  subTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addTask();
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = '';
    taskModalCnt.style.display = 'none';
    main.style.filter = 'none';
    sidebar.style.filter = 'none';
    header.style.filter = 'none';
    renderTasks();
  });
}
addNewTask();

function closeProjModal() {
  closeBtn.addEventListener('click', () => {
    projModal.style.display = 'none';
    main.style.filter = 'none';
    sidebar.style.filter = 'none';
    header.style.filter = 'none';
  });
}
closeProjModal();

function closeTaskModal() {
  taskModalBtn.addEventListener('click', () => {
    taskModalCnt.style.display = 'none';
    main.style.filter = 'none';
    sidebar.style.filter = 'none';
    header.style.filter = 'none';
  });
}
closeTaskModal();

function deleteTask() {
  trash.addEventListener('click', (e) => {
    const elementClass = e.target.className;
    const index = projectsList[currentIndex].todos.findIndex(
      (object) => object.id == elementClass,
    );
    console.log(index);
    console.log(projectsList);
    // if above breaks try ==
    projectsList[currentIndex].todos.splice(index, 1);
    renderTasks();
    localStorage.setItem('projectsList', JSON.stringify(projectsList));
  });
}

function toggleChange() {
  menu.addEventListener('click', () => {
    menu.classList.toggle('change');
    // sidebar.classList.toggle('open');
    // sidebar.style.display = 'flex';
  });
}
toggleChange();

const y = window.matchMedia('(max-width: 640px)');
y.addEventListener('change', ({ matches }) => toggleSBID(matches));
console.log(y);
function toggleSBID() {
  if (y.matches) {
    sidebar.className = 'closed';
    menu.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      sidebar.classList.toggle('sidebar1');
    });
  } else {
    sidebar.className = 'sidebar1';
  }
}
toggleSBID();

export { trash, currentProj };
