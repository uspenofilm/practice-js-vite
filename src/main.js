import "./js/login"

// Додай відображення дати і часу в реальному часі
// <p class="date">Current data and time: <span></span></p>

const dateSpan = document.querySelector(".date span");
dateSpan.textContent = new Date().toLocaleString();
setInterval(() => dateSpan.textContent = new Date().toLocaleString(),1000
)

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції
// function greet() {
//   return "hello world";
// }
// const greetPromise = new Promise(resolve => {
//     setTimeout (() => resolve("hello world"), 2000)

// })
// greetPromise
// .then(value => console.log(value)) 

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const answer = Number(prompt("enter number"));
function checkAnswer(answer) {
    return new Promise((resolve, reject) => {
        if (Number.isNaN(answer)) return reject("error");
        if (answer % 2 === 0) return setTimeout(() => resolve("even"), 1000);
        if (answer % 2 !== 0) return setTimeout(() => resolve("odd"), 2000);
    })
}

checkAnswer(answer).then(value => console.log(value)).catch(error => console.log(error))