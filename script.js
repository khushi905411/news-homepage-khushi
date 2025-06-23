const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
