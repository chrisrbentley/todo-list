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
  body, main, header, newProjBtn, projUL, projModal, projFormBtn, projectInput,
  closeBtn, content, taskModalCnt, taskModalBtn, subTaskBtn, titleInput,
  descriptionInput, dueDateInput, priorityInput,
} from './UI';

let tempID;
let trash;

function renderAll() {
  projUL.innerHTML = '';
  for (let i = 0; i < projectsList.length; i++) {
    const project = document.createElement('li');
    project.className = 'project';
    project.id = projectsList[i].id;
    project.textContent = projectsList[i].title;
    projUL.appendChild(project);

    project.addEventListener('click', () => {
      const filteredList = projectsList.filter((fList) => fList.id == project.id);
      if (filteredList[0].todos.length > 0) {
        content.innerHTML = '';
        for (let i = 0; i < filteredList[0].todos.length; i++) {
          const task = document.createElement('div');
          const taskName = document.createElement('div');
          const taskDetails = document.createElement('div');
          const detailsButton = document.createElement('button');
          const taskDate = document.createElement('div');
          trash = document.createElement('img');

          content.appendChild(task);
          task.appendChild(taskName);
          task.appendChild(taskDetails);
          taskDetails.appendChild(detailsButton);
          task.appendChild(taskDate);
          task.appendChild(trash);

          task.className = 'task';
          taskName.classList.add('task-item', 'task-name');
          taskDetails.classList.add('task-item', 'task-details');
          detailsButton.id = project.id;
          detailsButton.className = 'details';
          taskDate.classList.add('task-item', 'task-date');
          trash.src = '/src/img/trash-icon.svg';
          trash.id = 'delete';
          trash.className = filteredList[0].todos[i].id;

          taskName.textContent = filteredList[0].todos[i].title;
          detailsButton.textContent = 'Details';
          taskDate.textContent = filteredList[0].todos[i].dueDate;
          detailsButton.addEventListener('click', () => {
            const detailsContainer = document.createElement('div');
            const closeDetails = document.createElement('button');
            const detailsContent = document.createElement('div');
            const detailsTitle = document.createElement('div');
            const detailsDescription = document.createElement('div');
            const detailsDate = document.createElement('div');
            const detailsPriority = document.createElement('div');

            detailsContainer.className = 'details-container';
            detailsContent.className = 'details-content';
            detailsTitle.id = 'details-title';
            detailsDescription.id = 'details-description';
            detailsDate.id = 'details-date';
            detailsPriority.id = 'details-priority';

            closeDetails.textContent = 'X';
            detailsTitle.textContent = filteredList[0].todos[i].title;
            detailsDescription.textContent = `Description: ${filteredList[0].todos[i].description}`;
            detailsDate.textContent = `Due Date: ${filteredList[0].todos[i].dueDate}`;
            detailsPriority.textContent = `Priority: ${filteredList[0].todos[i].priority}`;

            body.appendChild(detailsContainer);
            detailsContainer.appendChild(closeDetails);
            detailsContainer.appendChild(detailsContent);
            detailsContent.appendChild(detailsTitle);
            detailsContent.appendChild(detailsDescription);
            detailsContent.appendChild(detailsDate);
            detailsContent.appendChild(detailsPriority);
            main.style.filter = 'blur(4px)';
            header.style.filter = 'blur(4px)';

            closeDetails.addEventListener('click', () => {
              detailsContainer.remove();
              main.style.filter = 'none';
              header.style.filter = 'none';
            });
          });
          deleteTask();
        }
        const newTask = document.createElement('btn');
        content.appendChild(newTask);
        newTask.id = project.id;
        tempID = newTask.id;
        newTask.className = 'new-task-btn';
        newTask.textContent = '+ New Task';
        newTask.addEventListener('click', displayTaskModal);
      } else {
        content.innerHTML = '';
        const emptyProjCnt = document.createElement('div');
        const emptyProjP = document.createElement('p');
        emptyProjP.textContent = 'This project is empty.';

        emptyProjP.id = 'empty-project';

        content.appendChild(emptyProjCnt);
        emptyProjCnt.appendChild(emptyProjP);

        const newTask = document.createElement('btn');
        content.appendChild(newTask);
        newTask.className = 'new-task-btn';
        newTask.id = project.id;
        tempID = newTask.id;
        newTask.textContent = '+ New Task';
        // eslint-disable-next-line no-use-before-define
        newTask.addEventListener('click', displayTaskModal);
      }
    });
  }
}
renderAll();

(function displayProjModal() {
  newProjBtn.addEventListener('click', () => {
    projModal.style.display = 'flex';
  });
}());

function displayTaskModal() {
  taskModalCnt.style.display = 'flex';
}

function addProj() {
  projFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addProject();
    projectInput.value = '';
    projModal.style.display = 'none';
    renderAll();
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
    renderAll();
  });
}
addNewTask();

function closeProjModal() {
  closeBtn.addEventListener('click', () => {
    projModal.style.display = 'none';
  });
}
closeProjModal();

function closeTaskModal() {
  taskModalBtn.addEventListener('click', () => {
    taskModalCnt.style.display = 'none';
  });
}
closeTaskModal();

function deleteTask() {
  trash.addEventListener('click', (e) => {
    // eslint-disable-next-line eqeqeq
    const projIndex = projectsList.findIndex((object) => object.id == tempID);

    const elementClass = e.target.className;
    const index = projectsList[projIndex].todos.findIndex((object) => object.id === elementClass);
    // if above breaks try ==
    projectsList[projIndex].todos.splice(index, 1);
  });
}

export { tempID, trash };
