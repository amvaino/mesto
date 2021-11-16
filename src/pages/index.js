import './index.css';
import { createCard } from "../components/card.js";
import { enableValidation, toggleButtonState } from "../components/validate.js";
import {
    config,
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
    newItemPopup,
    popupAvatar,
    popupProfileEdit,
    profileAvatarImg,
    profileName,
    profileSubname,
    submitBtnFormProfileEdit,
    submitBtnNewAvatar,
    submitBtnNewItemForm,
    submitProfileButton } from '../components/constants.js';
import { openPopup, closePopup, closePopupByClick } from "../components/modal.js";
import { renderUserInfo, renderUserAvatar, showErrorOutput } from "../components/utils.js";
import { getUserInfo, dataProfile, dataAvatar, getCards, addNewCard } from "../components/api.js";


// вызваем функцию валидации input
enableValidation(config);

popupProfileEdit.addEventListener("submit",  handleProfileForm);
newItemPopup.addEventListener("submit", handleMestoForm);
popupAvatar.addEventListener("submit", handleAvatarForm);

function setValuesToFormProfileUser() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubname.textContent;
    submitBtnFormProfileEdit.disabled = false;
  }

clickProfileEdit.addEventListener("click", () => {
    setValuesToFormProfileUser();
    openPopup(popupProfileEdit);
    //отключаем кнопку перед открытием модального окна
    //submitBtnFormProfileEdit.disabled = true;
    toggleButtonState(false);
    const setLoading = showingLoadingClosing(popup);
    setLoading(false);
});

clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemPopup);
    //отключаем кнопку перед открытием модального окна
    submitBtnNewItemForm.disabled = true;
});

clickButtonAvatarEdit.addEventListener("click", () => {
    openPopup(popupAvatar);
    //отключаем кнопку перед открытием модального окна
    submitBtnNewAvatar.disabled = true;
});

popupProfileEdit.addEventListener('click', closePopupByClick);
newItemPopup.addEventListener('click', closePopupByClick);
imgBigPopap.addEventListener('click', closePopupByClick);
popupAvatar.addEventListener('click', closePopupByClick);



Promise.all([getUserInfo(), getCards()])
  .then(res => {
    renderUserInfo(res[0].name, res[0].about);
    renderUserAvatar(res[0].name, res[0].avatar);

    res[1].forEach(function newItem(point) {
        renderNewCard(point)
    });
  })
  .catch(showErrorOutput);

//Выводим новую карточку
function renderNewCard(point) {
    const newItem = createCard(point);
    cardsList.prepend(newItem)
}

function showingLoadingClosing(btn) {
    const formButton = btn;
    const text = formButton.textContent;
    return function (isLoading) {
      if (isLoading) {
        formButton.textContent = 'Сохранение...';
      } else {
        formButton.textContent = text;
      }
    };
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

    closePopup(newItemPopup);
    addNewCard(point);
    renderNewCard(point);
    const setLoading = showingLoadingClosing(submitProfileButton);
    setLoading(true);
    formNewMesto.reset(); //очистка всей формы "Новое место" после submit
}
// Обработчик отправки формы "редактировать профиль"
export function handleProfileForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    dataProfile({
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
    dataAvatar({
        avatar: avatarLinkInput.value,
      });
    formNewAvatar.reset(); //очистка всей формы "Редактировать профиль" после submit
    closePopup(popupAvatar);
}
