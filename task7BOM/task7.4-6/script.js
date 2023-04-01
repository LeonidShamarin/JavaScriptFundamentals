// 7-4.
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний
//  елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
const dropdown = document.getElementById("dropdown");
const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", function () {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  dropdown.removeChild(selectedOption);
});


// 7-5 Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
const myBtn = document.getElementById("myButton");

const onMe = document.getElementById("onMe");
const pressed = document.getElementById("pressed");
const notOnMe = document.getElementById("notOnMe");
const pressed2 = document.getElementById("pressed2");




myBtn.addEventListener("mouseover", () => {
  onMe.innerText = "Mouse on me!";
});
myBtn.addEventListener("click", () => {
  pressed.innerText = "I was pressed!";
});
myBtn.addEventListener("mouseout", () => {
  notOnMe.innerText = "Mouse is not on me !";
});
myBtn.addEventListener("mouseover", () => {
    pressed2.innerText = "Mouse on me!";
  });

// 7-6  Реалізуйте програму, яка відслідковуватиме зміну розміру 
//   (ширини і висоти) вікна браузера і виводитиме на поточну 
//   сторінку при її розтязі/стисканні відповідні значення.



const widthSpan = document.getElementById("width");
const heightSpan = document.getElementById("height");

function handResize() {
 // Отримання ширини та висоти вікна
const myWidth = window.innerWidth;
const myHeight = window.innerHeight;

 // Виведення значень ширини та висоти на сторінку
 widthSpan.textContent = myWidth;
 heightSpan.textContent = myHeight;
}
// Приєднання функції до події resize об'єкта window

window.addEventListener("resize", handResize);
// Виклик функції один раз при завантаженні сторінки, 
//щоб відобразити поточні розміри вікна
handResize();