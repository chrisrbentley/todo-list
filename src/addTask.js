import { format, parseISO } from 'date-fns';
import { Todo } from './todo';
import {
  titleInput,
  descriptionInput,
  dueDateInput,
  priorityInput,
} from './UI';
// eslint-disable-next-line import/no-cycle
import { currentProj } from './domController';
import { projectsList } from './projects';

function addTask() {
  const title = titleInput.value;
  const description = descriptionInput.value;
  // const dueDate = dueDateInput.value;
  let dueDate = parseISO(dueDateInput.value);
  dueDate = format(dueDate, 'P');
  const priority = priorityInput.value;
  const completed = false;
  const id = Date.now();

  const newTodo = new Todo(
    title,
    description,
    dueDate,
    priority,
    completed,
    id,
  );
  // eslint-disable-next-line eqeqeq
  const index = projectsList.findIndex((object) => object.id == currentProj);
  projectsList[index].todos.push(newTodo);
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
  console.log(localStorage);
  console.log(projectsList);
}

// eslint-disable-next-line import/prefer-default-export
export { addTask };
