// Напишіть скріпт, який за допомогою засобів DOM створить для
// порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>

//Створення основних елементів
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");

const div = document.createElement("div");
div.setAttribute("id", "myDiv");

const p = document.createElement("p");
p.innerHTML = "First paragraph";

//Додавання елементів до DOM
div.appendChild(p);
main.appendChild(div);
document.body.appendChild(main);
