import { Todo } from "./todo";
import { titleInput, descriptionInput, dueDateInput, priorityInput } from './UI'
import { tempID } from "./domController";
import { projectsList } from "./projects";

function addTask() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    const completed = false;
    const id = Date.now();

    const newTodo = new Todo(title, description, dueDate, priority, completed, id);
    console.log(newTodo);
    console.log(projectsList);
    console.log(tempID);
    
    const index = projectsList.findIndex(object => {
        return object.id == tempID;
    })
    console.log(index);
    projectsList[index].todos.push(newTodo);
}

export { addTask };