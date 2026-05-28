const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) link.classList.add('active');
});
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
