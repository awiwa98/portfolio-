const hamburger = document.querySelector('.hamburger'); // Hamburger menu
const navLinks = document.querySelector('.nav-links'); // Navigation links
const introduction = document.querySelector('.introduction'); // Introduction section

hamburger.addEventListener('click', () => {
  // Toggle the "active" class on the hamburger for the X-animation
  hamburger.classList.toggle('active');
  
  // Toggle the visibility of the menu
  navLinks.classList.toggle('active');
  
  // Toggle extra padding in the introduction section
  if (navLinks.classList.contains('active')) {
    introduction.classList.add('menu-active');
  } else {
    introduction.classList.remove('menu-active');
  }
});



  
