// ЗАДАЧА 1
// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.
// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const { email, password } = event.target.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (!emailValue || !passwordValue) return;
    
    }