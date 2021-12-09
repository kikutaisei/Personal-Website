// - - - NAVBAR - - -
const navbarTimeline = gsap.timeline({defaults: {duration: 0.5, y: "-250%", ease: "back"}});
navbarTimeline
  .from("#navbar", {duration: 1, y: "-100%", ease: "bounce"})
  .from(".navbar-logo", {})
  .from(".menu-button, .navbar-links li", {stagger: 0.2})

const menuButton = document.getElementsByClassName('menu-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

// - - - HOME SECTION - - -
const homeSectionTimeline = gsap.timeline({defaults: {duration: 0.5, y: "50%", ease: "power 1", opacity: 0}});
homeSectionTimeline
  .from(".home-section-overlay", {duration: 1, y: "0%", ease: "power 1", opacity: 1})
  .from(".home-section-titles h1", {})
  .from(".home-section-titles h2", {})
  .from(".home-section-titles a", {})
  .from(".home-section-memoji", {x: "10%", y: "0%"})