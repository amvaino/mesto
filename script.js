//ПОПАП "редактировать профиль"
const clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку редактировать профиль
const popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
clickProfileEdit.addEventListener("click", function () {
    popupProfileEdit.classList.add("popup_opened"); //открываем попап "редактировать профиль", добавляем у popup класс popup_opened
});
const popupClose = popupProfileEdit.querySelector(".popup__close"); //находим крестик
popupClose.addEventListener("click", function () {
    popupProfileEdit.classList.remove("popup_opened"); //закрываем попап "редактировать профиль" удаляем у popup класс popup_opened
});

//ПОПАП "добавить новое место"
const clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку добавить профиль
const newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
clickProfileAdd.addEventListener("click", function () {
    newItemForm.classList.add("popup_opened"); //открываем попап "добавить новое место", добавляем у popup класс popup_opened
});

const popupFormClose = newItemForm.querySelector(".popup__close"); //находим крестик 2ой попап
popupFormClose.addEventListener("click", function () {
    newItemForm.classList.remove("popup_opened"); //закрываем попап "добавить место"
});

const clickCardLike = document.querySelectorAll(".card__like"); //находим все like

//Добавляем карточки
const cardsList = document.querySelector(".elements-grid"); //находим список карточек
const cardElement = document.querySelector(".card"); //находим карточку
const cardTemplate = document.querySelector(".cards-temlate").content; //находим шаблон карточки
//массив данных карточек
const primordialCards = [
    {
        title: "Карачаево-Черкессия",
        imgLink: "./images/kchr.jpg",
        imgAlt: "Горы.Карачаево-Черкессия",
    },
    {
        title: "Гора Эльбрус",
        imgLink: "./images/elbrus.jpg",
        imgAlt: "Гора Эльбрус",
    },
    {
        title: "Домбай",
        imgLink: "./images/dombai.jpg",
        imgAlt: "Домбай",
    },
    {
        title: "Гора Эльбрус",
        imgLink: "./images/elbrus.jpg",
        imgAlt: "Гора Эльбрус",
    },
    {
        title: "Карачаевск",
        imgLink: "./images/karachaevsk.jpg",
        imgAlt: "Карачаевск",
    },
    {
        title: "Домбай",
        imgLink: "./images/dombai.jpg",
        imgAlt: "Домбай",
    },
];
//вывод в DOM карточек
primordialCards.forEach(function (element) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    //обработчик лайка
    cardElement
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    cardElement.querySelector(".card__title").textContent = element.title;
    cardElement.querySelector(".card__image").src = element.imgLink;
    cardElement.querySelector(".card__image").alt = element.imgAlt;
    cardsList.append(cardElement);
});
//Добавляем новую карточку
