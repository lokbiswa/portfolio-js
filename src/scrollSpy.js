const sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".nav-link");
// To set Navbar to page top
window.onscroll = () => {
  sections.forEach((sec) => {
    let fromTop = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight - 165;
    let id = sec.id;
    // check if scroll
    if (fromTop >= offset && fromTop < offset + height) {
      // navLinks.forEach((link) => {
      //   link.classList.remove("active");
      //   document
      //     .querySelector(`.nav-item a[href ='#${id}']`)
      //     .classList.add("active");
      // });
      navBarPosition(id);
    }
  });
};
// using fix-top to fix navbar on top
function navBarPosition(id) {
  if (id === sections[1].id) {
    console.log(id);
    const navbar = document.getElementById("navbar");
    navbar.classList.add("fix-top");
  }
  if (id === sections[0].id) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("fix-top");
  }
}
// navBarPosition("projects");
