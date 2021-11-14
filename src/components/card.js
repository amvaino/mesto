import { cardTemplate, modalImageElement, captionTextImg, imgBigPopap } from './constants.js'
import { openPopup } from './modal.js';
import { getLike, removeLike, deleteCard } from './api.js';
import { errorOutput } from './utils.js'

//функция для инициализации карточки
/* const updateLikesCount = (selector, count) => {
    selector.textContent = count;
  } */
export function createCard(point) {
    const newItem = cardTemplate.querySelector(".card").cloneNode(true);
    //newItem.querySelector(".card__likes").textContent = point.likes.length;
    //обрабатываем лайк
    const cardLikesCount = newItem.querySelector(".card__likes"); 
    newItem.querySelector(".card__like")
        .addEventListener("click", function (evt) {
            //evt.target.classList.toggle("card__like_active");
            if(!evt.target.classList.contains("card__like_active")) {
                getLike(newItem.id)
                  .then((res) => {
                    evt.target.classList.add("card__like_active");
                    updateLikesCount(cardLikesCount, res.likes.length);
                  })
                  .catch(err => errorOutput(err));
              } else {
                removeLike(newItem.id)
                  .then((res) => {
                    evt.target.classList.remove("card__like_active");
                    updateLikesCount(cardLikesCount, res.likes.length);
                  })
                  .catch(err => errorOutput(err));
              }
        });   
        cardLikesCount.textContent = getLike.length;
    //удаляем карточку
    const deleteButton = newItem.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        
        
        newItem.remove();
        
        deleteCard(newItem.id)
        .then(() => {
          evt.target.parentNode.remove();
        })
        .catch(err => errorOutput(err));

    });

/*       // Иконка удаления карточки
  // Проверка на принадлежность карточки текущему пользователю
  if(owner) {
    // Показываем иконку удаления
    cardRemoveButton.classList.add(config.cards.deleteButtonVisibleClass);

    // Навешиваем событие для удаления карточки
    cardRemoveButton.addEventListener('click', deleteCardHandler);
  } */

    newItem.querySelector(".card__title").textContent = point.name;
    newItem.querySelector(".card__image").src = point.link;
    newItem.querySelector(".card__image").alt = point.name;
    newItem.id = point._id;

    //открытие большой картики
    newItem
        .querySelector(".card__image")
        .addEventListener("click", function (evt) {
            modalImageElement.src = point.link;
            modalImageElement.alt = point.name;
            captionTextImg.textContent = point.name;
            openPopup(imgBigPopap);
        });
    return newItem;
    
}
