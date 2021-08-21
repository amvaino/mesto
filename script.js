//ПОПАП "редактировать профиль"
let clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку редактировать профиль
let popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
clickProfileEdit.addEventListener("click", function () {
    popupProfileEdit.classList.add("popup_opened"); //открываем попап "редактировать профиль", добавляем у popup класс popup_opened
});
let popupClose = popupProfileEdit.querySelector(".popup__close"); //находим крестик

popupClose.addEventListener("click", function () {
    popupProfileEdit.classList.remove("popup_opened"); //закрываем попап "редактировать профиль" удаляем у popup класс popup_opened
});

//ПОПАП "добавить новое место"
let clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку добавить профиль
let newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
clickProfileAdd.addEventListener("click", function () {
    newItemForm.classList.add("popup_opened"); //открываем попап "добавить новое место", добавляем у popup класс popup_opened
});

let popupFormClose = newItemForm.querySelector(".popup__close"); //находим крестик 2ой попап
popupFormClose.addEventListener("click", function () {
    newItemForm.classList.remove("popup_opened"); //закрываем попап "добавить место"
});

let clickCardLike = document.querySelectorAll(".card__like"); //находим все like
