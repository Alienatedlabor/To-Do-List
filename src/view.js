const wrapper = document.querySelector('.wrapper');

function renderProjects(projects) {
  projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    // title
    const projectTitle = document.createElement('h1');
    projectTitle.textContent = project.title;
    projectElement.appendChild(projectTitle);

    // description
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectElement.appendChild(projectDescription);

    // due date
    const projectDueDate = document.createElement('span');
    projectDueDate.textContent = project.dueDate;
    projectElement.appendChild(projectDueDate);

    // priority
    projectElement.classList.add(project.priority);

    wrapper.appendChild(projectElement);
  });
}
export default renderProjects;
