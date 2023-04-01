// 7-1.
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.
// Створення нового вікна розміром 300x300 пікселів
const myWindow = window.open("", "", "width=300,height=300");
// Зміна розмірів вікна на 500x500 пікселів з затримкою 2 секунди
setTimeout(() => {
  myWindow.resizeTo(500, 500);
}, 2000);
// Переміщення вікна в точку з координатами (200, 200) з затримкою 4 секунди
setTimeout(() => {
  myWindow.moveTo(200, 200);
}, 4000);
// Закриття вікна з затримкою 6 секунд
setTimeout(() => {
  myWindow.close();
}, 6000);


//? 7-2 Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p>
// <div>
//         <button . . . . . >Change style!</button>
// </div>

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку
//  і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір
//  шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS() {
  // Отримання елемента <p> за його id
  const textElement = document.getElementById("text");
  // Зміна стилю тексту в <p>
  textElement.style.color = "orange";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "Comic";
}

const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", changeCSS);

// 7-3.
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку
//  з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий.
//         При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});
button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});
button3.addEventListener("mousedown", function () {
    document.body.style.backgroundColor = "brown";
});
button3.addEventListener("mouseup", function () {
    document.body.style.backgroundColor = "white";
});
link.addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "yellow";
});
link.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "white";
});
