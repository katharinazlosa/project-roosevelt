const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".hero__content__btn");
const closeModalBtn = document.querySelector(".btn__close");

const openModal = function () {
  modal.classList.remove("hidden");
};

openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);