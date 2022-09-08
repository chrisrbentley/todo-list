import addHours from "date-fns/addHours";

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
let defaultTodo = new Todo('Do some coding', 'Do some coding on The Odin Project', addHours(date, 6) , 'high', 'Read modules lesson', 'Not Done');

export { defaultTodo };