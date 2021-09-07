const clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку "редактировать профиль"
const popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
const clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку "добавить новое место"
const newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
const profileName = document.querySelector(".profile__name"); //находим имя h1
const profileSubname = document.querySelector(".profile__subname"); //находим профессию
//карточки
const cardsList = document.querySelector(".elements-grid"); //находим список карточек
const cardTemplate = document.querySelector(".cards-temlate").content; //находим шаблон карточки
const cardElement = cardTemplate.querySelector(".card"); //находим карточку в шаблоне
let cardImg = cardElement.querySelector(".card__image"); //находим картинку в карточке в шаблоне
console.log(cardImg);
// Получаем ссылки на элементы модалки для просмотра увеличенных изображений
const imgBigPopap = document.querySelector(".img-card-big");
const showPhotoCloseButton = imgBigPopap.querySelector(".popup__close");
const modalImageElement = imgBigPopap.querySelector(".popup__image");
const modalTextElement = imgBigPopap.querySelector(".popup__figcaption");
//массив карточек
const primordialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];
// Обработчик отправки формы "редактировать профиль"
function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.getElementById("f1").value;
    let jobInput = document.getElementById("f2").value;
    profileName.textContent = nameInput;
    profileSubname.textContent = jobInput;
}
popupProfileEdit.addEventListener("submit", formSubmitHandler);

//ПОПАПы открытие-закрытие
function openPopup(popup) {
    popup.classList.add("popup_opened");
}
function closePopup(popup) {
    popup.classList.remove("popup_opened");
}
clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
});
clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemForm);
});
cardImg = cardElement
    .querySelector(".card__image")
    .addEventListener("click", function (evt) {
        //клик по изображению
        modalImageElement.src = evt.target.src;
        modalImageElement.alt = evt.target.alt;
        modalTextElement.textContent = evt.target.alt;

        openPopup(imgBigPopap);
    });
popupProfileEdit.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(popupProfileEdit);
});
newItemForm.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(newItemForm);
});
imgBigPopap.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup") ||
        event.target.classList.contains("popup__button")
    )
        closePopup(imgBigPopap);
});

function createCard(point) {
    const cardItemTemplate = document.querySelector(".cards-temlate");
    const newItem = cardItemTemplate.content.firstElementChild.cloneNode(true);
    newItem
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    //удаляем карточку
    const deleteButton = newItem.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        const card = document.querySelector(".element");
        newItem.remove();
    });
    newItem.querySelector(".card__title").textContent = point.name;
    newItem.querySelector(".card__image").src = point.link;
    newItem
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
            //клик по изображению
            modalImageElement.src = evt.target.src;

            openPopup(imgBigPopap);
        });
    return newItem;
}
// Обработчик отправки формы "новое место" сделал
function formSubmitMesto(evt) {
    evt.preventDefault();
    //Получения введенных значений в поля
    const name = document.getElementById("f3").value;
    const link = document.getElementById("f4").value;
    const point = {
        name: "",
        link: "",
    };
    point.name = name;
    point.link = link;
    newItem(point);
}
newItemForm.addEventListener("submit", formSubmitMesto);

//Добавление карточки места

function newItem(point) {
    let newItem = createCard(point);
    cardsList.prepend(newItem);
}
//вывод карточек из массива
primordialCards.forEach(function (element) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    //обработчик лайка
    cardElement
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    cardElement.querySelector(".card__title").textContent = element.name;
    cardElement.querySelector(".card__image").src = element.link;
    cardElement
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
            //клик по изображению
            modalImageElement.src = evt.target.src;

            openPopup(imgBigPopap);
        });
    cardsList.append(cardElement);

    //удаляем карточку
    const deleteButton = cardElement.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        const card = document.querySelector(".element");
        cardElement.remove();
    });
});
