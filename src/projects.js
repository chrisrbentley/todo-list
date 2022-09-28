import { defaultTodo, defaultTodo2 } from './todo.js';
import { projectInput } from './UI';
let projectsList = [];

class Project {
    constructor(title, todos, id) {
        this.title = title;
        this.todos = todos;
        this.id = id;
    }
}

let reminders = new Project('Reminders', [], Date.now());
projectsList.push(reminders);
reminders.todos.push(defaultTodo);
console.log(projectsList);

function addProject() {
    const title = projectInput.value;
    const todos = [];
    const id = Date.now();
    const newProject = new Project(title, todos, id);
    projectsList.push(newProject);
    console.log(projectsList);
};

export { projectsList, addProject };