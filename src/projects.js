import { id } from 'date-fns/locale';
import { defaultTodo } from './todo.js';



let projectsList = [];

class Project {
    constructor(title, todos, id) {
        this.title = title;
        this.todos = todos;
        this.id = Date.now();
    }
}

let reminders = new Project('Reminders', [], Date.now());
projectsList.push(reminders);

reminders.todos.push(defaultTodo);
console.log(projectsList);

export function addProject() {
    const title = projectInput.value;
    const project = new Project(title, []);
    projectsList.push(project);
    console.log(projectsList);
    renderProjects();
};

export { projectsList };