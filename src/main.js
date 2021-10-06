const name = "Lok";
const lastname = "Shankar";
const summary =
  "I am a fullstack developer in Kansas City, KS. I have a greate passion for software developement";

const linkedinLink = "https://www.linkedin.com/in/lok-shankar";
const githubLink = "https://github.com/lokbiswa";

function onPageLoad() {
  const linked = document.getElementById("linkedin");
  const github = document.getElementById("github");
  linked.href = linkedinLink;
  github.href = githubLink;
}

// utility funtions
function getElementAssignInnerHTML(id, innerHtml) {
  document.getElementById(id).innerHTML = innerHtml;
}
