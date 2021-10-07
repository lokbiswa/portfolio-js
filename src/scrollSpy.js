let observer = new IntersectionObserver((entries) => {
  const navbar = document.getElementById("navbar");
  entries[0].boundingClientRect.bottom < 0
    ? navbar.classList.add("fix-top") // fix navbar when on Top
    : navbar.classList.remove("fix-top"); // scroll navbar after reaching bottom of home
});

observer.observe(document.querySelector("#home"));
