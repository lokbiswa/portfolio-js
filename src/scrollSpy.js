let observer = new IntersectionObserver((entries) => {
  const navbar = document.getElementById("navbar");
  entries[0].boundingClientRect.bottom < 0
    ? navbar.classList.add("fix-top") // fix navbar when on Top
    : navbar.classList.remove("fix-top"); // scroll navbar after reaching bottom of home
});

observer.observe(document.querySelector("#home"));

// smooth scrolling
links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(link);
  });
});

function smoothScroll(link) {
  console.log(link);
  const targetID = link.getAttribute("href");
  const targetPosition = document.querySelector(targetID).offsetTop;
  const currentPosition = window.pageYOffset;
  const offset = 40;
  const distance = targetPosition - currentPosition - offset;
  const duration = 100;
  let start = null;
  window.requestAnimationFrame(eachFrame);

  function eachFrame(timestamp) {
    start = start || timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, distance * (progress / duration) + currentPosition);
    if (progress < duration) window.requestAnimationFrame(eachFrame);
  }
}
