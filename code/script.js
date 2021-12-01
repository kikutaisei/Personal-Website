// - - - SCRIPT FOR THE NAVBAR - - -
gsap.from(".navbar", {duration: 1, y: "-100%", ease: "bounce"});
gsap.from(".navbar-logo", {duration: 1, y: "-150%", ease: "elastic", delay: 0.8});
gsap.from(".navbar-links li", {duration: 1, y: "-200%", ease: "elastic", delay: 1, stagger: 0.2});
gsap.from(".menu-button", {duration: 1, y: "-250%", ease: "elastic", delay:"1"});

const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})