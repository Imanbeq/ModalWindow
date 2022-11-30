"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpeneModal = document.querySelectorAll(".show-modal");
const btnShowMessage = document.querySelector(".hidden");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


for (let i = 0; i < btnsOpeneModal.length; i++){
    btnsOpeneModal[i].addEventListener("click", openModal);
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
    }
});





























