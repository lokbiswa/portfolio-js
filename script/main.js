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
    description: "This is a site for a local business.",
    link: "https://lokbiswa.github.io/funHousePizza/",
    github: "https://github.com/lokbiswa/funHousePizza",
    thumbnail: "./asset/funhousepizza.png",
  },
  {
    title: "Atm Simulator",
    description: "Practicing JavaScript and the Data Structures",
    link: "https://lokbiswa.github.io/atm-UsingObject/",
    github: "https://github.com/lokbiswa/atm-UsingObject",
    thumbnail: "./asset/atm.png",
  },
  {
    title: "TODO LIST",
    description: "Todo List web app that uses local storage to store data.",
    link: "https://lokbiswa.github.io/project-5/",
    github: "https://github.com/lokbiswa/project-5/tree/main/src",
    thumbnail: "./asset/todo.png",
  },
  {
    title: "FlawNalysis",
    description: "Fulstack Ticketing system for office related issue",
    link: "https://flawnalysis.herokuapp.com/",
    github: "https://github.com/lokbiswa/FlawNalysis",
    thumbnail: "./asset/flawNalysis.png",
  },
];
// dynamically create elements
function eachProject(object) {
  const projectsDiv = document.querySelector(".projects-row");
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center";
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
  projectName.innerHTML = object.title;
  const projectDes = document.createElement("p");
  projectDes.innerText = object.description;
  projectDes.className = "details";
  const linksDiv = document.createElement("div");
  linksDiv.className = "btn-group";
  const hostedLink = document.createElement("a");
  hostedLink.className = "project-link";
  hostedLink.href = object.link;
  hostedLink.innerHTML = '<i class="fas fa-desktop"></i>';
  const githubRepo = document.createElement("a");
  githubRepo.className = "project-link";
  githubRepo.href = object.github;
  githubRepo.innerHTML = "<i class='fab fa-github-square'></i>";
  linksDiv.appendChild(hostedLink);
  linksDiv.appendChild(githubRepo);
  nestElements(projectInfo, projectName, projectDes, linksDiv);
  //  appending elements
  nestElements(project, projectInfo, projectThumbnail);
  nestElements(col, project);
  nestElements(projectsDiv, col);
}
// render created elements
function renderProjects(list) {
  list.forEach(eachProject);
}
// add content dynamically
function onPageLoad() {
  let note =
    localStorage.getItem("note") || `Send me a message, let's get in touch`;
  document.getElementById("subtitle").innerText = note;
  renderProjects(projects);
  const linked = document.getElementById("linkedin");
  const github = document.getElementById("github");
  linked.href = linkedinLink;
  github.href = githubLink;
}

// utility funtions
function nestElements(...elements) {
  elements.reduce((a, b) => {
    console.log(a);
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
const navMenu = document.querySelectorAll(".nav-link");
navMenu.forEach((link) => {
  link.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
