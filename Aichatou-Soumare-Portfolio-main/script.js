const burgerBtn = document.querySelector('#checkbox');
const navMenu = document.querySelector('.navMenu');
const links = document.querySelectorAll('.navItem > a');
const navbar = document.querySelector('.navbar');

burgerBtn.addEventListener("click", () => {
  burgerBtn.checked = !navMenu.classList.contains('active');
  navMenu.classList.toggle("active");
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.checked = false;
    navMenu.classList.toggle("active");
    document.body.style.overflow = 'auto';
  });
});

