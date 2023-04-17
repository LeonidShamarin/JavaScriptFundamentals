// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній
//  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача
//  операційної системи, тип операційної системи, час роботи системи в хвилинах (використати
//     модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require("http");
const os = require("os");
const path = require("path");
const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const user = os.userInfo().username;
  const osType = os.type();

  const uptimeMinutes = Math.round(os.uptime() / 60);

  const cwd = process.cwd();
  const filename = path.basename(__filename);

  const html = `
    <h1>System information</h1>
    <p>Current user name: ${user}</p>
    <p>OS Type: ${osType}</p>
    <p>System work time: ${uptimeMinutes} minutes </p>
    <p>Current work directory: ${cwd}</p>
    <p>Server file name: ${filename}</p>`;
  res.write(html);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
//node script.js -запуск
// 12-2.
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я
// системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із
// привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати
// об’єкт module.exports.
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме
// наступну сторінку:

const http = require("http");
const personalModule = require("./personalmodule");

const PORT = 8000;

const server = http.createServer((req, res) => {
  const userName = "Leonid";
  const greetingMessage = personalModule.greeting(userName);

  const currentDate = new Date().toString();

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`Date of request: ${currentDate}<br>${greetingMessage}`);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
//cd + директорія (одне завдання розкоментувати і інше закоментувати)
