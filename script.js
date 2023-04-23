'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal'); // querySelector() only selects the first element

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  console.log('Modal closed');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// to open the modal
for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', openModal);
}

// to close the modal
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (x) {
  if (x.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
