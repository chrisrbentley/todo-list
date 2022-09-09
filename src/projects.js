import { defaultTodo } from './todo.js';

let projectsList = [];

class Project {
    constructor(title, todos) {
        this.project = title;
        this.todos = todos;
    }
}

let reminders = new Project('Reminders', []);
projectsList.push(reminders);

reminders.todos.push(defaultTodo);
console.log(projectsList);   

export { projectsList };