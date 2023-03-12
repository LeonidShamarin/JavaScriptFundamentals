"use strict";
//2
console.log("Shamarin Leonid");

//3

let apartment;
apartment = "clean";
let book;
book = "nice";

console.log(apartment, book);
apartment = book;
console.log(apartment, book);

//4
const myObject = {
  myString: "Hello",
  myNumber: 50,
  myBoolean: true,
  myUndefined: undefined,
  myNull: null,
};
console.log(myObject);

//5
const isAdult = confirm("Вам виповнилоь 18 років?");
console.log(isAdult);
//6
const myFirstName = "Leonid";
const myLastName = "Shamarin";
const myStudyGroup = "jsFundamentals";
const myYearOfBirth = 1992;
const isMarried = false;
const nullVariable = null;
let undefinedVariable;

const firstNameType = typeof myFirstName;
const lastNameType = typeof myLastName;
const groupType = typeof myStudyGroup;
const birthYearType = typeof myYearOfBirth;
const isMarriedType = typeof isMarried;
const nullVariableType = typeof nullVariable;
const undefinedVariableType = typeof undefinedVariable;

console.log(myYearOfBirth);
console.log(isMarried);
console.log(myFirstName + " " + myLastName);
console.log(firstNameType);
console.log(lastNameType);
console.log(groupType);
console.log(birthYearType);
console.log(isMarriedType);
console.log(nullVariableType);
console.log(undefinedVariableType);

//7
let login = prompt("What is your login?");
alert(`Dear User, your login is ${login}!`);
let email = prompt("What is your email?");
alert(`Dear User, your email is ${email} !`);
let password = prompt("What is your password?");
alert(`Dear User, your pasword is ${password}!`);

//8
//Кількість секунд у годині
const secondPerHour = 60 * 60;
alert("Кількість секунд у годині:" + secondPerHour);
//Кількість секунд у добі
const secondPerDay = secondPerHour * 24;
alert("Кількість секунд у добі:" + secondPerDay);
//Кількість секунд у місяці(беремо що в місяці 30 днів)
const secondPerMonth = secondPerDay * 30;
alert("Кількість секунд у місяці:" + secondPerMonth);

//9
function findCompartment() {
  const seatNum = Number(document.getElementById("seatNum").value);

  if (isNaN(seatNum) || seatNum < 1 || seatNum > 54) {
    document.getElementById("result").textContent =
      "Введіть коректний номер місця (1-54)";
  } else {
    let compartmentNum = Math.ceil(seatNum / 4);
    let seatType = seatNum % 2 == 0 ? "нижнє" : "верхнє";
    let sideType = compartmentNum % 2 == 0 ? "бічне" : "напроти";
    document.getElementById(
      "result"
    ).textContent = `Ваше місце в купе №${compartmentNum}, ${seatType} місце, ${sideType} від входу`;
  }
}
