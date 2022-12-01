import ProjectList from './projectList';
import Project from './project';
import renderProjects from './view';

const exampleList = new ProjectList();
const example = new Project('Housework', 'various chores', '11/13/2022', 'low');

example.addTask('test');
example.removeTask('test');
exampleList.addProject(example);
console.log(exampleList);
renderProjects(exampleList.projects);
