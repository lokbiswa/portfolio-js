// data
const name = "Lok";
const lastname = "Shankar";
const summary =
  "I am a fullstack developer in Kansas City, KS. I have a greate passion for software developement";

const linkedinLink = "https://www.linkedin.com/in/lok-shankar";
const githubLink = "https://github.com/lokbiswa";
//Data for projects
const projects = [
  {
    title: "Fun House Pizza",
    link: "https://lokbiswa.github.io/funHousePizza/",
    github: "https://github.com/lokbiswa/funHousePizza",
    thumbnail: "./asset/funhousepizza.png",
  },
  {
    title: "AMT Mock-up",
    link: "https://lokbiswa.github.io/atm-UsingObject/",
    github: "",
    thumbnail: "./asset/atm.png",
  },
  {
    title: "TODO LIST",
    link: "https://lokbiswa.github.io/project-5/",
    github: "",
    thumbnail: "./asset/todo.png",
  },
  {
    title: "FlawNalysis",
    link: "https://flawnalysis.herokuapp.com/",
    github: "https://github.com/lokbiswa/FlawNalysis",
    thumbnail: "./asset/flawNalysis.png",
  },
];
// dynamically create elements
function eachProject(object) {
  const projectsDiv = document.querySelector(".projects-row");
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center";
  const project = document.createElement("div");
  project.className = "project";
  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = object.thumbnail;
  projectThumbnail.className = "img-fluid";
  // on hover info of each projects
  const projectInfo = document.createElement("div");
  projectInfo.className = "info";
  projectName = document.createElement("h4");
  projectName.className = "project-names";
  projectName.innerHTML = object.name;
  const links = document.createElement("a");
  const hostedLink = document.createElement("a");
  hostedLink.className = "liveDemo";
  hostedLink.href = object.link;
  const github = document.createElement("a");
  github.className = "projectLink";
  github.href = object.github;
  // hidden dive appending
  nestElements(projectInfo, projectName, hostedLink, github);
  //  appending elements
  nestElements(project, projectThumbnail);
  nestElements(col, project);
  nestElements(projectsDiv, col);
}
// render created elements
function renderProjects(list) {
  list.forEach(eachProject);
}
// add content dynamically
function onPageLoad() {
  renderProjects(projects);
  const linked = document.getElementById("linkedin");
  const github = document.getElementById("github");
  linked.href = linkedinLink;
  github.href = githubLink;
}

// utility funtions
function nestElements(...elements) {
  elements.reduce((a, b) => {
    // console.log(a);
    a.appendChild(b);
    return a;
  });
}
function getElementAssignInnerHTML(id, innerHtml) {
  document.getElementById(id).innerHTML = innerHtml;
}

// to collapes the navbar.
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navMenu = document.querySelectorAll(".navlink");
navMenu.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
