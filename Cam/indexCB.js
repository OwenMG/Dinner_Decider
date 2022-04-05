//modal

  let allergyBtn = document.querySelector("#allergy");
  let modalBg = document.querySelector('.modal-background');
  let modal = document.querySelector('.modal')

  allergyBtn.addEventListener('click', () => {
      modal.classList.add('is-active');
  });

  modalBg.addEventListener('click', () => {
      modal.classList.remove('is-active');
  });