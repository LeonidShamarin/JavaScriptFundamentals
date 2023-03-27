"use strict";
// 1.
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3
//
const list = document.getElementById("list");
const first = list.firstElementChild.textContent;
const last = list.lastElementChild.textContent;
const second = list.children[1].textContent;
const fourth = list.children[3].textContent;
const third = list.children[2].textContent;
alert(`${first},${last},${second},${fourth},${third}`);

//
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів
// DOM простилізує сторінку так як показано на картинці.
const h1 = document.querySelector("h1");
const firstP = document.querySelector("#myDiv p:first-child");
const secondP = document.querySelector("#myDiv p:nth-child(2)");
const thirdP = document.querySelector("#myDiv p:nth-child(3)");
const fourthP = document.querySelector("#myDiv p:last-child");
const span = document.querySelector('span');
const myList = document.getElementById("myList");
const listItems =document.querySelectorAll("#myList li");



//змінюю стилі елементів
h1.style.backgroundColor = "lightgreen";
h1.style.fontSize = "20px";
h1.style.fontWeight = "bold";
h1.style.width = "200px";
firstP.style.fontWeight = "bold";
secondP.style.color = "red";
thirdP.style.textDecoration = "underline";
fourthP.style.fontStyle = "italic";
myList.display = "flex";
span.style.opacity = 0;

for (let i=0; i< listItems.length; i++) {
    listItems[i].style.display="inline";
    listItems[i].style.listStyle="none";

}

