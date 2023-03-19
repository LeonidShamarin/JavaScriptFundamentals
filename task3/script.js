//1.Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати
//значення нового масиву без повторень.

// (1 й варіант)
//function compact(arr) {
//   return [...new Set(arr)];
// }

function compact(array) {
    return array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);
//2Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//- початкове значення; - кінцеве значення а на виході отримує масив із діапазоном
//цих значень (реалізувати достатньо лише із числовими значеннями)
function createArray(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "Введіть числа!";
    }
    const arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(createArray(2, 9));
//3 Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно,
//при цьому a виводится 1 раз, число а+1 - два рази і т.д.
let A = 5,
    B = 9;
for (let i = A; i < B; i++) {
    let res = "";
    for (let j = i - A; j >= 0; j--) res += i;
    console.log(res);
}
//4Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими
//числами. Випадкові числа генеруються із діапазону 1-500.

function randArray(k) {
    for (let i = 0; i < k.length; i++) {
        k[i] = Math.floor(Math.random() * 500) + 1;
    }
}
const arr = new Array(5);
randArray(arr);
console.log(arr);
//5 Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного
//типу даних (не приводити тип стрінг в число навіть якщо там лише число)
//let  arr = [5, "Limit", 12, "a", “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/
function separateArrays(arr) {
    const result = [[], []];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            const nestedArrays = separateArrays(item);
            result[0].push(...nestedArrays[0]);
            result[1].push(...nestedArrays[1]);
        } else if (typeof item === "number") {
            result[0].push(item);
        } else {
            result[1].push(item);
        }
    });
    return result;
}
const arr = [
    5,
    "Limit",
    12,
    "a",
    "3",
    99,
    2,
    [2, 4, 3, "33", "a", "text"],
    "strong",
    "broun",
];
const arrNew = separateArrays(arr);
console.log(arrNew);
//6 Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну
//із арифметичних операцій та повертає її результат. Вид операції визначається
//цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
function calc(a, b, op) {
    let result;
    switch (op) {
        case 1:
            result = a - b;
            break;
        case 2:
            result = a * b;
            break;
        case 3:
            result = a / b;
            break;
        default:
            result = a + b;
            break;
    }
    return result;
}

//console.log(calc(5,7,2));

//7Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на
//унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів),
//то функція поверне true, інакше - false.
//indUnique([1, 2, 3, 5, 3]);  // => false
//findUnique([1, 2, 3, 5, 11]); // => true

function findUnique(arr) {
    const set = new Set(arr);
    return set.size === arr.length;
}

  //console.log(findUnique([1, 2, 3, 5, 3]));
