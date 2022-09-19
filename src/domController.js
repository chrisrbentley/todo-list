import { add } from 'lodash';
import { projectsList, addProject } from './projects';
import { newProjBtn, projUL, projModal, projFormBtn, projectInput, closeBtn } from './UI';

function renderProjects() {
    for (let i = 0; i < projectsList.length; i++) {
        const project = document.createElement('li');
        project.className = 'project';
        project.textContent = projectsList[i].title;
        projUL.appendChild(project);
    }
};
renderProjects();

(function displayProjModal() {
    newProjBtn.addEventListener('click', () => {
        projModal.style.display = 'flex';
    })
})();

function addProj() {
    projFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        addProject();
        projUL.innerHTML = '';
        renderProjects();
        projectInput.value = '';
        projModal.style.display = 'none';
    })
}
addProj();

function closeProjModal() {
    closeBtn.addEventListener('click', () => {
        projModal.style.display = 'none';
    })
}
closeProjModal();