import { todo } from "./Todo";

const projects = () => {
    let projectsArr = [];

    class Project {
        constructor(title, todos) {
            this.project = title;
            this.todos = todos;
        }
    }

    let todoList = new Project('Todo List', []);
    projectsArr.push(todoList);
    console.log(projectsArr);



}


export { projects }