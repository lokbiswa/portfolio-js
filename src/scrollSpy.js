const sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    let fromTop = window.scrollY;
    let offset = sec.offsetTop - 160;
    let height = sec.offsetHeight;
    let id = sec.id;
    if (fromTop >= offset && fromTop < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        console.log(id);
        document
          .querySelector(`.nav-item a[href ='#${id}']`)
          .classList.add("active");
      });
      navBarPosition(id);
    }
  });
};
function navBarPosition(id) {
  if (id === sections[1].id) {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("fix-top");
  }
  if (id === sections[0].id) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("fix-top");
  }
}
