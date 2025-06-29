const logo = document.querySelector('.sultan-logo');
const sword = document.querySelector('.sword');
const portfolio = document.querySelector('.portfolio-content');

logo.addEventListener('mouseenter', () => {
  sword.style.opacity = 1;
});

logo.addEventListener('mouseleave', () => {
  sword.style.opacity = 0;
});

logo.addEventListener('click', () => {
  sword.style.transform = 'translate(-50%, -50%) rotate(405deg)';
  setTimeout(() => {
    sword.style.opacity = 0;
    portfolio.classList.remove('hidden');
    portfolio.classList.add('show');
  }, 800);
});
