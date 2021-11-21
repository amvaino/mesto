(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{eY:()=>B});var t=".popup__button",r=(document.querySelectorAll(".popup"),document.forms.formNewMesto),n=document.querySelector(".profile__edit"),o=document.querySelector(".popup-edit-profile"),c=o.querySelector(".popup__button"),a=document.querySelector(".profile__avatar-button"),i=document.querySelector(".popup-avatar"),u=document.forms.formNewAvatar,l=document.querySelector(".profile__add"),s=document.querySelector(".new-item-form"),d=document.querySelector(".profile__name"),p=document.querySelector(".profile__avatar"),m=document.querySelector(".profile__subname"),v=document.querySelector(".elements-grid"),f=document.querySelector(".cards-temlate").content,_=document.querySelector(".img-card-big"),y=_.querySelector(".popup__image"),h=_.querySelector(".popup__caption"),S=document.querySelector("[name=nameInput]"),q=document.querySelector("[name=jobInput]"),k=r.querySelector("[name=mesto-title]"),b=r.querySelector("[name=mesto-link]"),E=u.querySelector("[name=avatar-link]"),L=o.querySelector(".popup__form"),C=o.querySelector(t),g=(s.querySelector(t),u.querySelector(t));function x(e){e.classList.add("popup_opened"),document.addEventListener("keydown",U)}function w(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",U)}function A(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup"))&&w(e.target.closest(".popup"))}function U(e){"Escape"===e.code&&w(document.querySelector(".popup_opened"))}v.querySelectorAll(".card__like");var N={serverUrl:"https://nomoreparties.co/v1/plus-cohort-3",headers:{authorization:"a816c82e-39b0-4c48-9647-89203e47e4c6","Content-Type":"application/json"}},P=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},T=function(e){console.log("Ошибка на сервере: ".concat(e))};function O(e){var t=f.querySelector(".card").cloneNode(!0);t.id=e._id,t.owner=e.owner,t.querySelector(".card__title").textContent=e.name,t.querySelector(".card__image").src=e.link,t.querySelector(".card__image").alt=e.name;var r=t.querySelector(".card__likes"),n=t.querySelector(".card__like"),o=function(e,t){e.textContent=t},c=e.likes.some((function(t){return t._id===e.owner._id}));c&&n.classList.add("card__like_active"),r.textContent=e.likes.length,t.querySelector(".card__like").addEventListener("click",(function(e){var c;e.target.classList.contains("card__like_active")?function(e){return fetch("".concat(N.serverUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:N.headers}).then(P)}(t.id).then((function(e){n.classList.remove("card__like_active"),o(r,e.likes.length)})).catch(T):(c=t.id,fetch("".concat(N.serverUrl,"/cards/likes/").concat(c),{method:"PUT",headers:N.headers}).then(P)).then((function(e){n.classList.add("card__like_active"),o(r,e.likes.length)})).catch(T)}));var a=t.querySelector(".card__delete-icon");return B._id!==t.owner._id&&a.remove(),a.addEventListener("click",(function(e){var r;(r=t.id,fetch("".concat(N.serverUrl,"/cards/").concat(r),{method:"DELETE",headers:N.headers}).then(P)).then((function(){e.target.closest(".card").remove()})).catch(T)})),t.querySelector(".card__image").addEventListener("click",(function(t){y.src=e.link,y.alt=e.name,h.textContent=e.name,x(_)})),t}var j,D=function(e,t,r){!function(e){return e.every((function(e){return e.validity.valid}))}(e)?(t.disabled=!0,t.classList.add(r.inactiveButtonClass)):(t.disabled=!1,t.classList.remove(r.inactiveButtonClass))};j={formSelector:".popup__form",inputSelector:".popup__form-input",buttonSelector:".popup__button",inputErrorClass:"popup__form-error",inactiveButtonClass:"popup__botton_disabled"},Array.from(document.querySelectorAll(j.formSelector)).forEach((function(e){return function(e,t){e.addEventListener("submit",(function(e){e.preventDefault()}));var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.buttonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?function(e,t,r){e.querySelector("#".concat(t.name,"-error")).textContent="",t.classList.remove(r.inputErrorClass)}(e,t,r):function(e,t,r){e.querySelector("#".concat(t.name,"-error")).textContent=t.validationMessage,t.classList.add(r.inputErrorClass)}(e,t,r)}(e,o,t),D(r,n,t)}))})),D(r,n,t)}(e,j)})),o.addEventListener("submit",(function(e){e.preventDefault();var r,n=J(o.querySelector(t));n(!0),(r={name:S.value,about:q.value},fetch("".concat(N.serverUrl,"/users/me"),{method:"PATCH",headers:N.headers,body:JSON.stringify({name:r.name,about:r.about})})).then((function(){d.textContent=S.value,m.textContent=q.value,c.disabled=!0,L.reset(),w(o)})).catch(T).finally((function(){n(!1)}))})),s.addEventListener("submit",(function(e){e.preventDefault();var n,o=J(s.querySelector(t));o(!0),(n={name:k.value,link:b.value},fetch("".concat(N.serverUrl,"/cards"),{method:"POST",headers:N.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(P)).then((function(e){v.prepend(O(e)),w(s),r.reset(),C.disabled=!0})).catch(T).finally((function(){o(!1)}))})),i.addEventListener("submit",(function(e){e.preventDefault();var r,n=J(formNewAvatar.querySelector(t));n(!0),(r={avatar:E.value},fetch("".concat(N.serverUrl,"/users/me/avatar"),{method:"PATCH",headers:N.headers,body:JSON.stringify({avatar:r.avatar})}).then(P)).then((function(){g.disabled=!0,p.src=E.value,formNewAvatar.reset(),w(i)})).catch(T).finally((function(){n(!1)}))})),n.addEventListener("click",(function(){x(o),S.value=d.textContent,q.value=m.textContent})),l.addEventListener("click",(function(){x(s)})),a.addEventListener("click",(function(){x(i)})),o.addEventListener("click",A),s.addEventListener("click",A),_.addEventListener("click",A),i.addEventListener("click",A);var B={};function J(e){var t=e,r=t.textContent;return function(e){t.textContent=e?"Сохранение...":r}}Promise.all([fetch("".concat(N.serverUrl,"/users/me"),{headers:N.headers}).then(P),fetch("".concat(N.serverUrl,"/cards"),{method:"GET",headers:N.headers}).then(P)]).then((function(e){var t,r;B._id=e[0]._id,t=e[0].name,r=e[0].about,d.textContent=t,m.textContent=r,function(e,t){p.src=t,p.alt="Аватар ".concat(e)}(e[0].name,e[0].avatar),e[1].forEach((function(e){!function(e){var t=O(e);v.append(t)}(e)}))})).catch(T)})();