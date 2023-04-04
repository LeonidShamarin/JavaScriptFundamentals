"use strict";
// 8-1.
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в
//  верхньому регістрі, чи ні.
// Приклад роботи:
// upperCase('regexp');
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}
console.log(upperCase("regexp")); // "String's not starts with uppercase character"
console.log(upperCase("RegExp")); // "String's starts with uppercase character"

// 8-2.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність
//  емейлу. Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail(str) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(str);
}

console.log(checkEmail("Qmail2@gmail.com"));



// 8-3.
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const str = "Java Script";
const regex = /^(\w+)\s+(\w+)$/;
const result = str.replace(regex, "$2, $1");

console.log(result);



// 8-4.
// Напишіть функцію, яка виконуватиме валідацію номера
//  банківської карти (9999-9999-9999-9999).

function checkCreditCardNumber(str) {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return regex.test(str);
}
console.log(checkCreditCardNumber("9999-9999-9999-9999"));
console.log(checkCreditCardNumber("1234-5678-9012-3456"));
console.log(checkCreditCardNumber("9999999999999999"));
console.log(checkCreditCardNumber("9999-9999-9999-9"));



// 8-5.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом
// емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

function checkEmail(email) {
  const regex =
    /^[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([_\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/;
  const firstChar = email.charAt(0);
  const lastChar = email.charAt(email.length - 1);
  const secondLastChar = email.charAt(email.length - 2);

  if (
    firstChar === "_" ||
    firstChar === "-" ||
    lastChar === "_" ||
    lastChar === "-"
  ) {
    return "Email is not correct!";
  } else if (email.includes("--")) {
    return "Email is not correct!";
  } else if (secondLastChar === "-") {
    return "Email is not correct!";
  } else if (regex.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}

console.log(checkEmail("my_mail@gmail.com"));
console.log(checkEmail("#my_mail@gmail.com"));
console.log(checkEmail("my_ma--il@gmail.com"));

// 8-6.
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок
//  від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим.
//   Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа
//   з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
//1.1, 3

// checkLogin('ee1*1ret3');
// false
//1, 1, 3

function checkLogin(login) {
  const loginCheck = /^[a-zA-Z][a-zA-Z0-9\.]{2,10}$/;
  if (!loginCheck.test(login)) {
    return false;
  }
  return login.match(/\d+(\_\d+)?/g);
}



console.log(checkLogin("ee1.1ret3"));
console.log(checkLogin("ee1*1ret3"));
