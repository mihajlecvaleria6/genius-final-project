const mainModal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleMainModal = () => mainModal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleMainModal);
modalBtnClose.addEventListener('click', toggleMainModal);
