/* eslint-disable import/no-cycle */
import { defaultTodo } from './todo';
import { projectInput } from './UI';

const projectsList = [];

class Project {
  constructor(title, todos, id) {
    this.title = title;
    this.todos = todos;
    this.id = id;
  }
}

const reminders = new Project('Reminders', [], Date.now());
projectsList.push(reminders);
reminders.todos.push(defaultTodo);

function addProject() {
  const title = projectInput.value;
  const todos = [];
  const id = Date.now();
  const newProject = new Project(title, todos, id);
  projectsList.push(newProject);

  /*   const newProjSave = JSON.stringify(newProject);
  localStorage.setItem('newProjSave', newProjSave);
  console.log(localStorage); */
  console.log(projectsList);
}

export { projectsList, addProject };
