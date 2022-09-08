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

let defaultTodo = new Todo('Do some coding', 'Do some coding on The Odin Project', '8/31/2022', 'high', '', 'Not Done');

export { defaultTodo };