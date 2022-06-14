const menuButton = document.querySelector('[data-button="open-menu"]');
const menuExitButton = document.querySelector('[data-button="close-menu"]');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.add('display');
});

menuExitButton.addEventListener('click', () => {
  nav.classList.remove('display');
});
