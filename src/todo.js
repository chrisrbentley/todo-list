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
let defaultTodo = new Todo('Get a haircut', 'Get a haircut before my job interview', formattedDate, 'high', false, Date.now());

export { defaultTodo, formattedDate, Todo };