// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/javascript.svg';

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
const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};
const LOCAL_KEY = 'login-form';
const form = document.querySelector('.login-form');
const button = document.querySelector('.login-btn');
const emailEl = document.querySelector('input[name="email"]');
const passwordEl = document.querySelector('input[name="password"]');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (button.textContent === 'Logout') {
    form.reset();
    localStorage.removeItem(LOCAL_KEY);
    emailEl.removeAttribute('readonly');
    passwordEl.removeAttribute('readonly');
    button.textContent = 'Login';
    return;
  }

  const { email, password } = event.target.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (!emailValue || !passwordValue) {
    iziToast.warning({
      message: 'fill all fields',
      iconUrl: icon,
    });
    return;
  }
  if (emailValue !== USER_DATA.email || passwordValue !== USER_DATA.password) {
    iziToast.error({
      message: 'uncorrect data',
      iconUrl: icon,
    });
    return;
  }
  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify({ email: emailValue, password: passwordValue })
  );
  button.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
  iziToast.success({
    message: 'You are logged in',
  });
}

const saveData = localStorage.getItem(LOCAL_KEY);
if (saveData) {
  const parsedData = JSON.parse(saveData);
  emailEl.value = parsedData.email || '';
  passwordEl.value = parsedData.password || '';
  button.textContent = 'Logout';
  emailEl.setAttribute('readonly', true);
  passwordEl.setAttribute('readonly', true);
}
