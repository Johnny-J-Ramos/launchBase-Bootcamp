const modalOverley = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
let modalMaximized = false;

for (let card of cards) {
  card.addEventListener('click', () => {
    modalOverley.classList.add('active');
    modalOverley.querySelector('iframe').src =
      'https://blog.rocketseat.com.br/upload-de-imagens-no-front-end-com-react-js-e-context-api-3/';
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverley.classList.remove('active');
  modalOverley.querySelector('iframe').src = '';
  modal.style.height = '80%';
  modal.style.whith = '80%';
  modalMaximized = false;
});

document.querySelector('.maximize-modal').addEventListener('click', () => {
  if (modalMaximized === false) {
    modal.style.height = '100%'; //altura
    modal.style.width = '100%';
    modalMaximized = true;
  } else {
    modal.style.height = '80%';
    modal.style.width = '80%';
    modalMaximized = false;
  }
});
