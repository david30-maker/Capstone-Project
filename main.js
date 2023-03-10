const goUp = document.querySelector('.go-up');
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    goUp.style.display = 'block';
  } else {
    goUp.style.display = 'none';
  }
};

const weSingMenu = document.getElementById('festival_menu');
const openWesingMenu = document.getElementById('bars');
const closeWesingMenu = document.getElementById('close-menu');
const clickLinks = document.querySelectorAll('.header-link');

openWesingMenu.addEventListener('click', () => {
  weSingMenu.style.top = '0';
});

closeWesingMenu.addEventListener('click', () => {
  weSingMenu.style.top = '-110%';
});

clickLinks.forEach((link) => {
  link.addEventListener('click', () => {
    weSingMenu.style.top = '-110%';
  });
});