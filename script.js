const clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку "редактировать профиль"
const popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
const clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку "добавить новое место"
const newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
let profileName = document.querySelector(".profile__name"); //находим имя h1
let profileSubname = document.querySelector(".profile__subname"); //находим профессию
// Обработчик отправки формы "редактировать профиль"
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.getElementById("f1").value;
    let jobInput = document.getElementById("f2").value;
    // Выберите элементы, куда должны быть вставлены значения полей
    //Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileSubname.textContent = jobInput;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupProfileEdit.addEventListener("submit", formSubmitHandler);

/* Обработчик формы новое место "добавить новое место", ссылка на картинку*/
function formSubmitMesto(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let locationInput = document.getElementById("f3").value;
    let linkImgInput = document.getElementById("f4").value;
    // Выберите элементы, куда должны быть вставлены значения полей
    //Вставьте новые значения с помощью textContent
    profileName.textContent = locationInput;
    profileSubname.textContent = linkImgInput;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
newItemForm.addEventListener("submit", formSubmitMesto);
/* Конец Обработчик формы новое место, ссылка на картинку*/

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

//карточки
const cardsList = document.querySelector(".elements-grid"); //находим список карточек
const cardElement = cardsList.querySelector(".card"); //находим карточку
const cardTemplate = document.querySelector(".cards-temlate").content; //находим шаблон карточки
//массив объектов данных карточек
const primordialCards = [
    {
        "название места": "Таллин",
        "ссылка на картинку":
            "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/Dostoprimechatelnosti-Tallina-e1531520714909.jpg",
        imgAlt: "Таллин",
    },
    {
        "название места": "Гора Эльбрус",
        "ссылка на картинку": "./images/elbrus.jpg",
        imgAlt: "Гора Эльбрус",
    },
    {
        "название места": "Карачаевск",
        "ссылка на картинку": "./images/karachaevsk.jpg",
        imgAlt: "Карачаевск",
    },
    {
        "название места": "Домбай",
        "ссылка на картинку": "./images/dombai.jpg",
        imgAlt: "Домбай",
    },
    {
        "название места": "Берлин",
        "ссылка на картинку":
            "https://avia-all.ru/uploads/posts/2020-01/1578062682_2.jpg",
        imgAlt: "Берлин",
    },
    {
        "название места": "Большая голубая дыра",
        "ссылка на картинку":
            "https://avatars.mds.yandex.net/get-zen_doc/4599736/pub_603f2c338da63757afcccb2f_603f2d50063b6456b1ff48b1/scale_1200",
        imgAlt: "Большая голубая дыра",
    },
];
console.log(primordialCards);
//вывод в DOM карточек
primordialCards.forEach(function (element) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    //обработчик лайка
    cardElement
        .querySelector(".card__like")
        .addEventListener("click", function (evt) {
            evt.target.classList.toggle("card__like_active");
        });
    cardElement.querySelector(".card__title").textContent =
        element["название места"];
    cardElement.querySelector(".card__image").src =
        element["ссылка на картинку"];
    cardElement.querySelector(".card__image").alt = element.imgAlt;
    cardsList.append(cardElement);
    //удаляем карточку
    const deleteButton = cardElement.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        const card = document.querySelector(".element");

        cardElement.remove();
    });
});
//Добавляем новую карточку
const popupButtonSaveNewItemForm = newItemForm.querySelector(".popup__button"); //находим кнопу сохранить в Popup новое место

popupButtonSaveNewItemForm.addEventListener("click", function () {
    console.log(popupButtonSaveNewItemForm);
});

// function addCard() {
//     const newCard = cardTemplate.querySelector(".card").cloneNode(true);
//     newCard.querySelector(".card__image").src = `${linkInput.value}`;
//     newCard.querySelector(
//         ".card__title"
//     ).textContent = `${locationInput.value}`;
//     newCard
//         .querySelector(".card__like")
//         .addEventListener("click", function (evt) {
//             evt.target.classList.toggle("card__like_active");
//             console.log(evt);
//         });

//     cardElement.prepend(newCard);
// }
