import { profileName, profileSubname, profileAvatarImg } from "./constants.js";
export const renderUserInfo = (name, job) => {
    profileName.textContent = name;
    profileSubname.textContent = job;
  }
export const renderUserAvatar = (name, avatar) => {
    profileAvatarImg.src = avatar;
    profileAvatarImg.alt = `Аватар ${name}`;
} 
export const showErrorOutput = (err) => {
    console.log(`Ошибка на сервере: ${err}`);
}