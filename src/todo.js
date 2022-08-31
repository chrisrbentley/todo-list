import { format } from 'date-fns/locale';
import projects from './projects';

const todo = () => {
    class Todo {
        constructor(title, description, dueDate, priority, notes, status) {
            this. title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.notes = notes;
            this.status = status;
        }
    }
    
    let test = new Todo('Take out dogs', 'take dogs out to pee', '8/31/2022', 'high', 'note', 'not done');
    console.log(test);
}

export { todo };



