let clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку редактировать профиль
let popupProfileEdit = document.querySelector(".popup"); //находим попап
let popupProfileEditClose = document.querySelector(".popup__close"); //находим крестик закрыть попап
let clickCardLike = document.querySelectorAll(".card__like"); //находим все like
let clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку добавить профиль

clickProfileEdit.addEventListener("click", function () {
    console.log("Мы кликнули по редактировать профиль");
    popupProfileEdit.classList.add("popup_opened"); //открываем попап, добавляем у popup класс popup_opened
});

popupProfileEditClose.addEventListener("click", function () {
    console.log("Мы кликнули по закрыть попап");
    popupProfileEdit.classList.remove("popup_opened"); //закрываем попап, удаляем у popup класс popup_opened
});

clickProfileAdd.addEventListener("click", function () {
    console.log("Мы кликнули по добавить профиль");
});
