class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(
      newDestinationSelector
    );
    destinationElement.append(element);
    element.scrollIntoView({ behavior: "smooth" });
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "beforbegin" : "beforeend",
      this.element
    );
  }
}

class ToolTip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const toolTipELement = document.createElement("div");
    toolTipELement.className = "card";
    const toolTipTemplate = document.getElementById("tooltip");
    const toolTipBody = document.importNode(toolTipTemplate.content, true);
    toolTipBody.querySelector("p").textContent = this.text;
    toolTipELement.append(toolTipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling =
      this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    toolTipELement.style.position = "absolute";
    toolTipELement.style.left = x + "px";
    toolTipELement.style.top = y + "px";

    toolTipELement.addEventListener("click", this.closeToolTip);
    this.element = toolTipELement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    const toolTip = new ToolTip(
      () => {
        this.hasActiveTooltip = false;
      },
      toolTipText,
      this.id
    );
    toolTip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener(
      "click",
      this.showMoreInfoHandler.bind(this)
    );
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector(
      "button:last-of-type"
    );
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjtItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjtItems) {
      this.projects.push(
        new ProjectItem(
          prjItem.id,
          this.switchProject.bind(this),
          this.type
        )
      );
    }
    console.log(this.projects);
  }

  setSwtichHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  // ADDING PROJECT FROM LIST TO OTHER LIST //
  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  // REMOVING PROJECT FROM LIST IT IS CURRENTLY IN //
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(
    //   (p) => p.id === projectId
    // );
    // this.projects.splice(projectIndex, 1);
    console.log(this.projects.find((p) => p.id === projectId));
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

    document
      .getElementById("start-analytics-btn")
      .addEventListener("click", this.startAnalytics);
  }
  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
