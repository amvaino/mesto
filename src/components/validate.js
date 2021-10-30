console.log("все ок");
const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__form-input",
    buttonSelector: ".popup__button",
    inputErrorClass: "popup__form-error",
};

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

const toggleButtonState = (buttonElement, inputList) => {
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
    console.dir(inputElement.validity);
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
        document.querySelectorAll(config.inputSelector)
    );
    // найти кнопку
    const submitButton = document.querySelector(config.buttonSelector);
    inputList.forEach((inputElement) => {
        // добавить слушателей для каждого инпута
        inputElement.addEventListener("input", () => {
            // проверка, что каждый ввод валиден
            checkInputValidity(inputElement);

            // состояние кнопки переключения
            toggleButtonState(submitButton, inputList);
        });
    });
    // установить начальное состояние кнопки
    toggleButtonState(submitButton, inputList);
};
export const enableValidation = () => {
    // найти все формы и создать из них массив
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    // слушатель для формы каждой
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    });
};
