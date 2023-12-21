class ToolTip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const swithhBtn = projectItemElement.querySelector(
      "button:last-of-type"
    );
    swithhBtn.addEventListener("click", this.updateProjectListsHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjtItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjtItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
    console.log(this.projects);
  }

  setSwtichHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // ADDING PROJECT FROM LIST TO OTHER LIST //
  addProject() {
    console.log(this);
  }

  // REMOVING PROJECT FROM LIST IT IS CURRENTLY IN //
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(
    //   (p) => p.id === projectId
    // );
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjecstList = new ProjectList("active");
    const finishedProjecstList = new ProjectList("finished");
    activeProjecstList.setSwtichHandlerFunction(
      finishedProjecstList.addProject.bind(finishedProjecstList)
    );
    finishedProjecstList.setSwtichHandlerFunction(
      activeProjecstList.addProject.bind(activeProjecstList)
    );
  }
}

App.init();
