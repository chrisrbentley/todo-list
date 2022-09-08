import { defaultTodo } from './todo.js'

let projectsList = [];

class Project {
    constructor(title, todos) {
        this.project = title;
        this.todos = todos;
    }
}

let todoList = new Project('Todo List', []);
projectsList.push(todoList);

todoList.todos.push(defaultTodo);
console.log(projectsList);   
