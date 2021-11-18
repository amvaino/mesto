import { cardTemplate, modalImageElement, captionTextImg, imgBigPopap } from './constants.js'
import { openPopup } from './modal.js';
import { addLike, removeLike, deleteCard } from './api.js';
import { showErrorOutput } from './utils.js'
import { userInfo } from '../pages/index.js';

//функция для инициализации карточки
export function createCard(point) {
    const newItem = cardTemplate.querySelector(".card").cloneNode(true);
    newItem.id = point._id
    newItem.owner = point.owner
    newItem.querySelector(".card__title").textContent = point.name;
    newItem.querySelector(".card__image").src = point.link;
    newItem.querySelector(".card__image").alt = point.name;
    const cardLikesCount = newItem.querySelector(".card__likes");
    const iconLike = newItem.querySelector('.card__like');
    const updateLikesCount = (selector, count) => {
      selector.textContent = count;
    }
    cardLikesCount.textContent = point.likes.length;
    newItem.querySelector(".card__like")
        .addEventListener("click", function (evt) {
            if(!evt.target.classList.contains("card__like_active")) {
                //добавляем like
                addLike(newItem.id)
                  .then((point) => {      
                    cardLikesCount.textContent = point.likes.length;  
                    iconLike.classList.add("card__like_active");
                    updateLikesCount(cardLikesCount, point.likes.length);
                  })
                  .catch(showErrorOutput);
              } else {
                  //удаляем like
                removeLike(newItem.id)
                  .then((point) => {
                    cardLikesCount.textContent = point.likes.length;
                    iconLike.classList.remove("card__like_active");
                    updateLikesCount(cardLikesCount, point.likes.length);                   
                  })
                  .catch(showErrorOutput);
              }
        });
        //если пользователь уже лайкнул карточку ставим active
        const isLike = point.likes.some((userInfo) => userInfo._id === point.owner._id);
        if (isLike) {
          iconLike.classList.add('card__like_active');
        } 
      //удаляем карточку
      //проверяем id создателя карточки и id юзера, если не совпадает, удалить card__delete-icon
      const deleteButton = newItem.querySelector(".card__delete-icon");
      if (userInfo._id !== newItem.owner._id) {
        deleteButton.remove();
      }
      deleteButton.addEventListener("click", function () {
          deleteCard(newItem.id)
          .then(() => {
            newItem.remove();     
          })
          .catch(showErrorOutput);
      });

    //открытие большой картики
    newItem.querySelector(".card__image")
        .addEventListener("click", function (evt) {
            modalImageElement.src = point.link;
            modalImageElement.alt = point.name;
            captionTextImg.textContent = point.name;
            openPopup(imgBigPopap);
        });
    return newItem;
}