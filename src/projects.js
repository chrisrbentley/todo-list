import { defaultTodo } from './todo.js';
import { projFormBtn } from './UI.js';
import { projectInput } from './UI.js';


let projectsList = [];

class Project {
    constructor(title, todos) {
        this.title = title;
        this.todos = todos;
    }
}

let reminders = new Project('Reminders', []);
projectsList.push(reminders);

reminders.todos.push(defaultTodo);
console.log(projectsList);


export function addProject() {
    const title = projectInput.value;
    const project = new Project(title, []);
    projectsList.push(project);
    console.log(projectsList);
};

export { projectsList };