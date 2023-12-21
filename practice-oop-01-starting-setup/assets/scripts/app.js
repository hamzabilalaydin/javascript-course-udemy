class ToolTip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectSwitchButton();
    this.connectMoreInfoButton();
  }

  connectMoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const swithhBtn = projectItemElement.querySelector(
      "button:last-of-type"
    );
    swithhBtn.addEventListener("click");
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    const prjtItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjtItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  // REMOVING PROJECT FROM LIST IT IS CURRENTLY IN //
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(
    //   (p) => p.id === projectId
    // );
    // this.projects.splice(projectIndex, 1);
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
  }
}

App.init();
