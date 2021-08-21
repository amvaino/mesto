let popupProfileEdit = document.querySelector(".popup");
let popupProfileEditClose = document.querySelector(".popup__close");
console.log(popupProfileEditClose);

let clickProfileEdit = document.querySelector(".profile__edit");
clickProfileEdit.addEventListener("click", function () {
    console.log("Мы кликнули по редактировать профиль");
    popupProfileEdit.classList.add("popup_opened"); //открываем попап
    popupProfileEditClose.classList.remove("popup_opened"); //закрываем попап
});

let clickProfileAdd = document.querySelector(".profile__add");
clickProfileAdd.addEventListener("click", function () {
    console.log("Мы кликнули по добавить профиль");
});
