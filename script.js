const navToggleGroup = document.querySelector('.nav-toggle-group');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

if (navToggleGroup && navList) {
  navToggleGroup.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navList.classList.toggle('nav-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navList.classList.contains('nav-open')) {
        navList.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
