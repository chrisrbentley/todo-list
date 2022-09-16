import { projectsList } from './projects';
import { newProjBtn, projUL, projModal } from './UI';


(function renderProjects() {
    for (let i = 0; i < projectsList.length; i++) {
        const project = document.createElement('li');
        project.className = 'project';
        project.textContent = projectsList[i].title;
        projUL.appendChild(project);
    }
})();

(function displayProjModal() {
    newProjBtn.addEventListener('click', () => {
        projModal.style.display = 'flex';
    })
})();