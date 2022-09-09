import { addDays, format } from "date-fns";
import parseISO from "date-fns/parseISO";

class Todo {
    constructor(title, description, dueDate, priority, notes, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.status = status;
    }
}
let date = new Date();
let formattedDate = format(date, "Pp")
let defaultTodo = new Todo('Do some coding', 'Do some coding on The Odin Project', formattedDate, 'high', 'Read modules lesson', false);

console.log(formattedDate);


export { defaultTodo, formattedDate };