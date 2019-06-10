const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const addSticky = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("is-fixed")
  } else {
    navbar.classList.remove("is-fixed");
  }
};

window.onscroll = () => {
  addSticky()
};
