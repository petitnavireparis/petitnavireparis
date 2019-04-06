document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
  addSticky()
};

// Get the navbar
const navbar = document.getElementById("nav");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const addSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("is-fixed")
  } else {
    navbar.classList.remove("is-fixed");
  }
}
