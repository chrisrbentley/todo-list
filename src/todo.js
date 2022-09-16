import { addDays, format } from "date-fns";
import parseISO from "date-fns/parseISO";
import { projectsList } from './projects.js';

class Todo {
    constructor(title, description, dueDate, priority, completed, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.id = Date.now();
    }
}
let date = new Date();
let formattedDate = format(date, "Pp")
let defaultTodo = new Todo('Do some coding', 'Do some coding on The Odin Project', formattedDate, 'high', false);

//console.log(formattedDate);

let newTodo;
export function addTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const completed = false;

    newTodo = new Todo(title, description, dueDate, priority, completed);
    console.log(newTodo);
    return newTodo;
}

export { defaultTodo, formattedDate, newTodo };