const name = "Lok";
const lastname = "Shankar";
const summary =
  "I am a fullstack developer in Kansas City, KS. I have a greate passion for software developement";

const linkedinLink = "https://www.linkedin.com/in/lok-shankar";
const githubLink = "https://github.com/lokbiswa";

const projects = [
  {
    title: "Fun House Pizza",
    link: "https://lokbiswa.github.io/funHousePizza/",
    thumbnail: "./asset/funhousepizza.png",
  },
  {
    title: "AMT Mock-up",
    link: "https://lokbiswa.github.io/atm-UsingObject/",
    thumbnail: "./asset/atm.png",
  },
  {
    title: "TODO LIST",
    link: "https://lokbiswa.github.io/project-5/",
    thumbnail: "./asset/todo.png",
  },
  {
    title: "FlawNalysis",
    link: "https://flawnalysis.herokuapp.com/",
    thumbnail: "./asset/flawNalysis.png",
  },
];
function eachProject(object) {
  const projectsDiv = document.querySelector(".projects-row");
  const col = document.createElement("div");
  col.className = "col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center";
  const project = document.createElement("div");
  project.className = "project";
  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = object.thumbnail;
  projectThumbnail.className = "img-fluid";
  nestElements(project, projectThumbnail);
  nestElements(col, project);
  nestElements(projectsDiv, col);
}
function renderProjects(list) {
  list.forEach(eachProject);
}
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
    console.log(a);
    a.appendChild(b);
    return a;
  });
}
function getElementAssignInnerHTML(id, innerHtml) {
  document.getElementById(id).innerHTML = innerHtml;
}
