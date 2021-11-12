const config = {
  serverUrl: 'https://nomoreparties.co/v1/plus-cohort-3',
  headers: {
    authorization: 'a816c82e-39b0-4c48-9647-89203e47e4c6',
    'Content-Type': 'application/json',
  },
};
function getUser() {
    return fetch(`${config.serverUrl}/users/me`, {
        headers: config.headers,
        }).then((res) => {
            if (res.ok) {
            return res.json();
        }
    return Promise.reject(`Ошибка: ${res.status}`);
    });
}

function editProfile(edit) {
    fetch(`${config.serverUrl}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        "Content-Type": "application/json",
        body: JSON.stringify({
        name: edit.name,
        about: edit.about,
        }),
    });
}
function editAvatar(user) {
    fetch(`${config.serverUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        "Content-Type": "application/json",
        body: JSON.stringify({
        avatar: user.avatar,
        }),
    });
}

/* const getCards = () => {
    return fetch(`${config.serverUrl}/cards/`, { method: 'GET', ...config }).then(checkIfResOk);
  };

  function deleteCard(cardId) {
    return fetch(`${config.serverUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: config.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  } */
  export {
    getUser,
    //getCards,
    //deleteCard,
    editProfile,
    editAvatar,

  };