class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(project) {
    this.projects = this.projects.filter((p) => p !== project);
  }
}
export default ProjectList;
