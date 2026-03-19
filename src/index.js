import "./styles.css";

class TODOListItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.itemList = [];
  }

  assignItemToProject(item) {
    this.itemList.push(item);
  }
}

const listItemOne = new TODOListItem(
  "Shopping List",
  "Buying daily groceries",
  "today",
  "high",
);

const listItemTwo = new TODOListItem(
  "Study supplies",
  "Supplies needed to study math",
  "tommorow",
  "low",
);

const projectOne = new Project("My Project");
projectOne.assignItemToProject(listItemOne);
projectOne.assignItemToProject(listItemTwo);

const projectTwo = new Project("BlaBla");
projectTwo.assignItemToProject(listItemOne);

console.log(projectOne.itemList);
console.log(projectTwo.itemList);
