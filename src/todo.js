import { format } from 'date-fns';

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
const date = new Date();
const formattedDate = format(date, 'Pp');
const defaultTodo = new Todo(
  'Get a haircut',
  'Get a haircut before my job interview',
  formattedDate,
  'high',
  false,
  Date.now(),
);

export { defaultTodo, formattedDate, Todo };
