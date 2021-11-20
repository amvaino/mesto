import './index.css';
import { createCard } from "../components/card.js";
import { enableValidation, setValuesFormNewAvatar, setValuesFormProfileEdit, 
  setValuesFormProfileAdd } from "../components/validate.js";
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
    submitProfileButton } from '../components/constants.js';
import { openPopup, closePopup, closePopupByClick, showingLoadingClosing } from "../components/modal.js";
import { renderUserInfo, renderUserAvatar, showErrorOutput } from "../components/utils.js";
import { getUserInfo, editProfile, dataAvatar, getCards, addNewCard } from "../components/api.js";
// вызваем функцию валидации input
enableValidation(config);

popupProfileEdit.addEventListener("submit",  handleProfileForm);
newItemPopup.addEventListener("submit", handleMestoForm);
popupAvatar.addEventListener("submit", handleAvatarForm);


clickProfileEdit.addEventListener("click", () => {
    openPopup(popupProfileEdit);
    //отключаем кнопку перед открытием модального окна
    setValuesFormProfileEdit();
});

clickProfileAdd.addEventListener("click", () => {
    openPopup(newItemPopup);
    //отключаем кнопку перед открытием модального окна
    setValuesFormProfileAdd();
});

clickButtonAvatarEdit.addEventListener("click", () => {
    openPopup(popupAvatar);
    //отключаем кнопку перед открытием модального окна
    setValuesFormNewAvatar();
});

popupProfileEdit.addEventListener('click', closePopupByClick);
newItemPopup.addEventListener('click', closePopupByClick);
imgBigPopap.addEventListener('click', closePopupByClick);
popupAvatar.addEventListener('click', closePopupByClick);

export const userInfo = {};

  Promise.all([getUserInfo(), getCards()])
  .then(res => {
    userInfo._id = res[0]._id;
    renderUserInfo(res[0].name, res[0].about);
    renderUserAvatar(res[0].name, res[0].avatar, res[0]._id);

    res[1].forEach(function newItem(point) {
        renderNewCard(point)
    });
  })
  .catch(showErrorOutput);

// Обработчик отправки формы "новое место"
function handleMestoForm(evt) {
  evt.preventDefault();
  const formButton = newItemPopup.querySelector(config.buttonSelector);
  const showLoading = showingLoadingClosing(formButton);
  showLoading(true);
      //Получения введенных значений в поля
      const name = mestoTitle.value;
      const link = mestoLink.value;
      const point = {
          name,
          link,
      };
  addNewCard(point)
    .then((newItem) => {
      renderNewCard(newItem)
      cardsList.prepend(createCard(newItem));
      closePopup(newItemPopup);
      formNewMesto.reset();
      submitBtnFormProfileEdit.disabled = true;
    })
    .catch(showErrorOutput)
    .finally(() => {
      showLoading(false);
    });
}
//Выводим новую карточку
function renderNewCard(point) {
  const newItem = createCard(point);
  cardsList.append(newItem)
}

// Обработчик отправки формы "редактировать профиль"
export function handleProfileForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    const formButton = popupProfileEdit.querySelector(config.buttonSelector);
    const showLoading = showingLoadingClosing(formButton);
    showLoading(true);
    profileName.textContent = nameInput.value;
    profileSubname.textContent = jobInput.value;
    editProfile({
        name: nameInput.value,
        about: jobInput.value,
      }).then(() => {
        submitProfileButton.disabled = true;
        formProfileEdit.reset(); //очистка всей формы "Редактировать профиль" после submit
        closePopup(popupProfileEdit);
      })
      .catch(showErrorOutput)
      .finally(() => {
        showLoading(false);
      });
}

// Обработчик отправки формы "сменить аватар"
export function handleAvatarForm(evt) {
    // Отменим стандартное поведение
    evt.preventDefault();
    const formButton = formNewAvatar.querySelector(config.buttonSelector);
    const showLoading = showingLoadingClosing(formButton);
    showLoading(true);
    profileAvatarImg.src = avatarLinkInput.value;
    dataAvatar({
        avatar: avatarLinkInput.value,
      }).then(() => {
        submitBtnNewAvatar.disabled = true;
        formNewAvatar.reset();
        closePopup(popupAvatar);
      })
      .catch(showErrorOutput)
      .finally(() => {
        showLoading(false);
      });
}
