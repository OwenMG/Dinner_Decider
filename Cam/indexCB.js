//modal

let allergyBtn = document.querySelector("#allergy-modal");
let modalBg = document.querySelector('.modal-background');
let modal = document.querySelector('.modal')
let closeModal = document.querySelector("#close-btn")
let saveAllergies = document.querySelector("#save-allergies")

  allergyBtn.addEventListener('click', () => {
      modal.classList.add('is-active');
  });

  modalBg.addEventListener('click', () => {
      modal.classList.remove('is-active');

  });

closeModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
})
  
saveAllergies.addEventListener('click', () => {
    modal.classList.remove('is-active');

})