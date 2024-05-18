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
const greetPromise = new Promise(resolve => {
    setTimeout (() => resolve("hello world"), 2000)

})
greetPromise
.then(value => console.log(value)) 