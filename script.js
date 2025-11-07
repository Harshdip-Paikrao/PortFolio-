// Typed.js animation
var typed = new Typed('#typed', {
  strings: ['Web Development', 'Frontend Design', 'Creative Coding'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
 const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });