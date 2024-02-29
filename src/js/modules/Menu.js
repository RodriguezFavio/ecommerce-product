export class Menu {
  constructor() {
    this.menuHandler();
  }

  toggleMenu() {
    const menu = document.querySelector('.nav_links');
    const overlay = document.querySelector('.overlay');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  menuHandler() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', this.toggleMenu);
    closeBtn.addEventListener('click', this.toggleMenu);
  }
}
