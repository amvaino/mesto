const clickProfileEdit = document.querySelector(".profile__edit"); //находим кнопку "редактировать профиль"
const popupProfileEdit = document.querySelector(".popup"); //находим попап "редактировать профиль"
const clickProfileAdd = document.querySelector(".profile__add"); //находим кнопку "добавить новое место"
const newItemForm = document.querySelector(".new-item-form"); //находим попап "добавить новое место"
const profileTitle = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subname");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.getElementsByName("nameInput");
    let jobInput = document.getElementsByName("jobInput");

    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput.value = `${profileTitle.textContent}`;
    jobInput.value = `${profileSubtitle.textContent}`;

    // Вставьте новые значения с помощью textContent
    nameInput.value = `${profileTitle.textContent}`;
    jobInput.value = `${profileSubtitle.textContent}`;
}

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
        event.target.classList.contains("popup")
    )
        closePopup(popupProfileEdit);
});

newItemForm.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("popup__close") ||
        event.target.classList.contains("popup")
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
