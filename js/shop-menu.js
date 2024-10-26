const shopMenu = document.querySelector('.shop-menu-backdrop');
const shopMenuBtnOpen = document.querySelector('.shop-menu-btn-open');
const shopMenuBtnClose = document.querySelector('.shop-menu-btn-close');

const toggleModal = () => shopMenu.classList.toggle('is-hidden');

shopMenuBtnOpen.addEventListener('click', toggleModal);
shopMenuBtnClose.addEventListener('click', toggleModal);
