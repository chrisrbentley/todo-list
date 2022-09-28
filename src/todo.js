import { addDays, format } from "date-fns";
import parseISO from "date-fns/parseISO";
//import { titleInput, descriptionInput, dueDateInput, priorityInput } from './UI'
import { projectsList } from './projects';
// import { tempID } from './C';

class Todo {
    constructor(title, description, dueDate, priority, completed, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        this.id = id;
    }
}
let date = new Date();
let formattedDate = format(date, "Pp")
let defaultTodo = new Todo('Do some coding', 'Do some coding on The Odin Project', formattedDate, 'high', false);


/* function addTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const completed = false;
    const id = Date.now();

    const newTodo = new Todo(title, description, dueDate, priority, completed, id);
    console.log(newTodo);
    console.log(projectsList);
} */

export { defaultTodo, formattedDate, Todo };