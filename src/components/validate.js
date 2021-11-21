import {
    nameInput,
    profileName,
    jobInput,
    profileSubname,
    submitBtnFormProfileEdit,
} from "./constants.js";

const isFormValid = (inputList) => {
    return inputList.every((item) => item.validity.valid);
};

const toggleButtonState = (inputList, submitButton, selectors) => {
    // если форма валидна, кнопка включения еще отключена
    if (isFormValid(inputList)) {
        // кнопку включить
        submitButton.disabled = false;
        submitButton.classList.remove(selectors.inactiveButtonClass);
    } else {
        // кнопку выключить
        submitButton.disabled = true;
        submitButton.classList.add(selectors.inactiveButtonClass);
    }
};

const hideInputError = (formElement, inputElement, selectors) => {
    const errorElement = formElement.querySelector(
        `#${inputElement.name}-error`
    );
    errorElement.textContent = "";
    inputElement.classList.remove(selectors.inputErrorClass);
};

const showInputError = (formElement, inputElement, selectors) => {
    const errorElement = formElement.querySelector(
        `#${inputElement.name}-error`
    );
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(selectors.inputErrorClass);
};

const checkInputValidity = (formElement, inputElement, selectors) => {
    // если валидно
    if (inputElement.validity.valid) {
        // скрыть ошибку
        hideInputError(formElement, inputElement, selectors);
    } else {
        // иначе показать ошибку
        showInputError(formElement, inputElement, selectors);
    }
};

const setEventListeners = (formElement, selectors) => {
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
    });
    // найти все инпуты
    const inputList = Array.from(
        formElement.querySelectorAll(selectors.inputSelector)
    );
    // найти кнопку
    const submitButton = formElement.querySelector(selectors.buttonSelector);

    inputList.forEach((item) => {
        item.addEventListener("input", () => {
            checkInputValidity(formElement, item, selectors);
            toggleButtonState(inputList, submitButton, selectors);
        });
    });
    // установить начальное состояние кнопки
    toggleButtonState(inputList, submitButton, selectors);
};

export function setValuesFormProfileEdit() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileSubname.textContent;
    submitBtnFormProfileEdit.disabled = false;
}

export const enableValidation = (selectors) => {
    // найти все формы и создать из них массив
    const formList = Array.from(
        document.querySelectorAll(selectors.formSelector)
    );
    // слушатель для формы каждой
    formList.forEach((item) => setEventListeners(item, selectors));
};
