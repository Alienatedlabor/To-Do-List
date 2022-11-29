class toDo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    //need the actual to do containers in the constructor?
  }
}

let example = new toDo('Housework', 'various chores', '11/13/2022', 'low');
let myList = [];
myList.push(example);
export default myList;
