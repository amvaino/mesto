const config = {
  serverUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: 'a816c82e-39b0-4c48-9647-89203e47e4c6',
    'Content-Type': 'application/json',
  },
};
//проверка ответа
const checkResponse = res => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
}
//получить инф-ию о пользователе
function getUserInfo() {
    return fetch(`${config.serverUrl}/users/me`, {
        headers: config.headers,
        }).then(checkResponse);
}
//получить профиль
function dataProfile(edit) {
    return fetch(`${config.serverUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
        name: edit.name,
        about: edit.about,
        }),
    });
}
//получить аватар
function dataAvatar(edit) {
    return fetch(`${config.serverUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
        avatar: edit.avatar,
        }),
    }).then(checkResponse)
}
//получить карточки с сервера
const getCards = () => {
    return fetch(`${config.serverUrl}/cards`, {
        method: "GET",
        headers: config.headers,
        }).then(checkResponse)
};

//сохраним новую карточку на сервер
function addNewCard(point) {
    return fetch(`${config.serverUrl}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
        name: point.name,
        link: point.link,
        }),
    }).then(checkResponse)
};
//Этот метод ставит лайк
const addLike = (cardId) => {
    return fetch(`${config.serverUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: config.headers,
    }).then(checkResponse);
  };
//удалить лайк с сервера
const removeLike = (cardId) => {
    return fetch(`${config.serverUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    }).then(checkResponse);
  }
//удалить карточку с сервера
const deleteCard = (cardId) => {
    return fetch(`${config.serverUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    }).then(checkResponse);
  }  
export {
    getUserInfo,
    getCards,
    dataProfile,
    dataAvatar,
    addNewCard,
    addLike,
    removeLike,
    deleteCard
};