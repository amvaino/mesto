import { config } from './constants.js';

const isFormValid = (inputList) => {
    //проверка валидности инпутов
    return inputList.every((inputElement) => inputElement.validity.valid);
};

const hideInputError = (inputElement) => {
    const errorElement = document.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = "";
    inputElement.classList.remove(config.inputErrorClass);
};

const showInputError = (inputElement) => {
    const errorElement = document.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
};

export const toggleButtonState = (buttonElement, inputList) => {
    // если форма валидна, кнопка включения еще отключена
    if (isFormValid(inputList)) {
        // кнопку включить
        buttonElement.disabled = false;
    } else {
        // кнопку выключить
        buttonElement.disabled = true;
    }
};
const checkInputValidity = (inputElement) => {
    // если валидно
    if (inputElement.validity.valid) {
        // скрыть ошибку
        hideInputError(inputElement);
    } else {
        // иначе показать ошибку
        showInputError(inputElement);
    }
};
const setEventListeners = (formElement) => {
    // предотвратить перезагрузку страницы при отправке формы
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    // найти все инпуты
    const inputList = Array.from(
        formElement.querySelectorAll(config.inputSelector)
    );
    // найти кнопку
    const submitButton = formElement.querySelector(config.buttonSelector);
    // установить начальное состояние кнопки
    toggleButtonState(submitButton, inputList);

    inputList.forEach((inputElement) => {
        // добавить слушателей для каждого инпута
        inputElement.addEventListener("input", () => {
            // проверка, что каждый ввод валиден
            checkInputValidity(inputElement);

            // состояние кнопки переключения
            toggleButtonState(submitButton, inputList);
        });
    });
};
export const enableValidation = () => {
    // найти все формы и создать из них массив
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    // слушатель для формы каждой
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};
