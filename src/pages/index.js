import './index.css';
import { createCard } from "../components/card.js";
import { enableValidation } from "../components/validate.js";
import {
    primordialCards,
    clickProfileEdit,
    popupProfileEdit,
    clickProfileAdd,
    newItemForm,
    cardsList,
    imgBigPopap,
    profileName,
    nameInput,
    jobInput,
    profileSubname,
    profileAvatar,
    formProfileEdit,
    mestoTitle,
    mestoLink,
    submitBtnFormProfileEdit,
    submitBtnNewItemForm,
    formNewMesto,
    clickButtonAvatarEdit,
    popupAvatar,
    avatarLinkInput,
    submitBtnNewAvatar,
    //profileAvatar,
    profileAvatarImg
} from '../components/constants.js';
import { openPopup, closePopup } from "../components/modal.js";
import { getUser, deleteCard, editProfile, editAvatar, getCards } from "../components/api.js";
// вызваем функцию валидации input
enableValidation();

function showUser() {
    getUser()
      .then((data) => {
        profileName.textContent = data.name;
        profileSubname.textContent = data.about;
        profileAvatarImg.src = data.avatar;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  showUser();

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
primordialCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
});
//Выводим массив карточек
/* getUser()
  .then((user) => {
    renderCard(user);

    //return primordialCard(user._id);
  }) */
  /* .then(hideSpinner)
  .catch((err) => alert('Что-то пошло не так... :(')); */

/* getCards.forEach(function newItem(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
}); */

//Выводим новую карточку
function renderCard(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem);
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
        //id,
    };
    renderCard(point);
    closePopup(newItemForm);
    formNewMesto.reset(); //очистка всей формы "Новое место" после submit
}

// Обработчик отправки формы "редактировать профиль"
export function handleProfileForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    console.log(profileName)
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