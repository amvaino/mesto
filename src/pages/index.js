import './index.css';
import { createCard } from "../components/card.js";
import { enableValidation } from "../components/validate.js";
import {
    avatarLinkInput,
    cardsList,
    clickButtonAvatarEdit,
    clickProfileAdd,
    clickProfileEdit,
    formNewMesto,
    formProfileEdit,
    imgBigPopap,
    jobInput,
    mestoLink,
    mestoTitle,
    nameInput,
    newItemForm,
    popupAvatar,
    popupProfileEdit,
    profileAvatarImg,
    profileName,
    profileSubname,
    renderUserAvatar,
    renderUserInfo,
    submitBtnFormProfileEdit,
    submitBtnNewAvatar,
    submitBtnNewItemForm,
    //primordialCards,
} from '../components/constants.js';
import { openPopup, closePopup } from "../components/modal.js";
import { errorOutput } from "../components/utils.js";
import { getUserInfo, editProfile, editAvatar, getCards, editCard } from "../components/api.js";

// вызваем функцию валидации input
enableValidation();

popupProfileEdit.addEventListener("submit",  handleProfileForm);
newItemForm.addEventListener("submit", handleMestoForm);
popupAvatar.addEventListener("submit", handleAvatarForm);


clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
    //отключаем кнопку перед открытием модального окна
    submitBtnFormProfileEdit.disabled = true;
});

clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemForm);
    //отключаем кнопку перед открытием модального окна
    submitBtnNewItemForm.disabled = true;
});

clickButtonAvatarEdit.addEventListener("click", () => {
    openPopup(popupAvatar);
    //отключаем кнопку перед открытием модального окна
    submitBtnNewAvatar.disabled = true;
});

popupProfileEdit.addEventListener('click', closePopupByClick);
newItemForm.addEventListener('click', closePopupByClick);
imgBigPopap.addEventListener('click', closePopupByClick);
popupAvatar.addEventListener('click', closePopupByClick);

function closePopupByClick(event) {
    if(event.target.classList.contains('popup__close') ||
       event.target.classList.contains('popup')
    ) {
      closePopup(event.target.closest('.popup'));
    }
}

//Выводим массив карточек
/* primordialCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
}); */

// тест
const userPromise = getUserInfo();
const cardPromise = getCards();

Promise.all([userPromise, cardPromise])
  .then(res => {
    getUserInfo._id = res[0]._id;
    renderUserInfo(res[0].name, res[0].about);
    renderUserAvatar(res[0].name, res[0].avatar);

    res[1].reverse().forEach(function newItem(point) {
        const newItem = createCard(point);
        cardsList.prepend(newItem);
    });
  })
  .catch(err => errorOutput(err));

  

//Выводим новую карточку
function renderCard(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem)
}

// Обработчик отправки формы "новое место"
function handleMestoForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    //Получения введенных значений в поля
    const name = mestoTitle.value;
    const link = mestoLink.value;
    const point = {
        name,
        link,
        alt: name,
    };
    renderCard(point);
    closePopup(newItemForm);
    editCard(point);
    formNewMesto.reset(); //очистка всей формы "Новое место" после submit
}

// Обработчик отправки формы "редактировать профиль"
export function handleProfileForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    editProfile({
        name: nameInput.value,
        about: jobInput.value,
      });
    formProfileEdit.reset(); //очистка всей формы "Редактировать профиль" после submit
    closePopup(popupProfileEdit);
}

// Обработчик отправки формы "сменить аватар"
export function handleAvatarForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    profileAvatarImg.src = avatarLinkInput.value;
    editAvatar({
        avatar: avatarLinkInput.value,
      });
      formNewAvatar.reset(); //очистка всей формы "Редактировать профиль" после submit
    closePopup(popupAvatar);
}
