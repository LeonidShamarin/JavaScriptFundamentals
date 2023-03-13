//1
let a = 1;
let b = 2;
let c = 3;

if (a < b && b < c) {
  console.log("Висловлення a < b < c є істинним.");
} else {
  console.log("Висловлювання a < b < c є хибним.");
}
//2
let x = 1;
let y = 2;

let res1 = "" + x + y;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + "" + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < 3;
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = NaN;
console.log(res4); // NaN
console.log(typeof res4); // ""number"
//3
let isAdult = prompt("Ви досягнули повнолітнього віку? Введіть так, або ні.");
if (isAdult.toLowerCase() === "так" || isAdult.toLowerCase() === "yes") {
  alert("Ви досягнуди повнолітнього віку");
} else {
  alert("Ви ще молоді.");
}
//4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let frequency = {};

for (let i = 0; i < arr.length; i++) {
  if (frequency[arr[i]]) {
    frequency[arr[i]]++;
  } else {
    frequency[arr[i]] = 1;
  }
}

let maxFrequency = 0;
let data;

for (let key in frequency) {
  if (frequency[key] > maxFrequency) {
    maxFrequency = frequency[key];
    data = parseInt(key);
  }
}

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== data) {
    newArr.push(arr[i]);
  }
}

arr = newArr;

console.log("Число з найбільшою частотою входження", data);
console.log("Масив без елементів з максимальною частотою входження", arr);
//5
let side1 = parseFloat(prompt("Введіть довжину першої сторони трикутника:"));
let side2 = parseFloat(prompt("Введіть довжину другої сторони трикутника:"));
let side3 = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));

if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
  console.log("Incorrect data");
} else {
  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    let p = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    console.log(`Площа трикутника: ${area.toFixed(3)}`);
    if (
      Math.pow(side1, 2) + Math.pow(side2, 2) === Math.pow(side3, 2) ||
      Math.pow(side1, 2) + Math.pow(side3, 2) === Math.pow(side2, 2) ||
      Math.pow(side2, 2) + Math.pow(side3, 2) === Math.pow(side1, 2)
    ) {
      console.log("Цей трикутник є прямокутним.");
    } else {
      console.log("Цей трикутник не є прямокутним.");
    }
    console.log(`Площа трикутника: ${area.toFixed(3)}`);

    if (
      Math.pow(side1, 2) + Math.pow(side2, 2) === Math.pow(side3, 2) ||
      Math.pow(side1, 2) + Math.pow(side3, 2) === Math.pow(side2, 2) ||
      Math.pow(side2, 2) + Math.pow(side3, 2) === Math.pow(side1, 2)
    ) {
      console.log("Цей трикутник є прямокутним.");
    } else {
      console.log("Цей трикутник не є прямокутним.");
    }
  } else {
    console.log("Incorrect data");
  }
}

//6
let date = new Date();
let hour = date.getHours();

if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} else if (hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} else if (hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} else {
  console.log("Доброго вечора");
}
