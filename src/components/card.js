import { cardTemplate, modalImageElement, captionTextImg, imgBigPopap } from './constants.js'
import { openPopup } from './modal.js';
import { addLike, removeLike, deleteCard } from './api.js';
import { showErrorOutput } from './utils.js'

const updateLikesCount = (selector, count) => {
    selector.textContent = count;
  }

//функция для инициализации карточки
export function createCard(point) {
    const newItem = cardTemplate.querySelector(".card").cloneNode(true);
    newItem.id = point._id;
    const cardLikesCount = newItem.querySelector(".card__likes");
    //обрабатываем лайк 
    newItem.querySelector(".card__like")
        .addEventListener("click", function (evt) {
            if(!evt.target.classList.contains("card__like_active")) {
                //добавляем like
                addLike(newItem.id)
                  .then((point) => {      
                    cardLikesCount.textContent = point.likes.length;  
                    evt.target.classList.add("card__like_active");
                    updateLikesCount(cardLikesCount, point.likes.length);
                  })
                  .catch(showErrorOutput);
              } else {
                  //удаляем like
                removeLike(newItem.id)
                  .then((point) => {
                    cardLikesCount.textContent = point.likes.length
                    evt.target.classList.remove("card__like_active");
                    updateLikesCount(cardLikesCount, point.likes.length);                   
                  })
                  .catch(showErrorOutput);
              }
        });          
    //удаляем карточку
    const deleteButton = newItem.querySelector(".card__delete-icon");
    deleteButton.addEventListener("click", function () {
        newItem.remove();
        deleteCard(newItem.id)
        .then(() => {
          newItem.id.closest();     
        })
        .catch(showErrorOutput);
    });

      // Иконка удаления карточки
  // Проверка на принадлежность карточки текущему пользователю
 /*  if(owner) {
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
