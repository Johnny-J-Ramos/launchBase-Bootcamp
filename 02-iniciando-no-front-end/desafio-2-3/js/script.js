const modalOverley = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function () {
    modalOverley.classList.add('active');
  });
}

const closeModal = document
  .querySelector('.close-modal')
  .addEventListener('click', function () {
    modalOverley.classList.remove('active');
    modalOverley.querySelector('iframe').src = '';
  });

const MaxiModal = document.querySelector('#mix').addEventListener('click', function(){
  mod
})
