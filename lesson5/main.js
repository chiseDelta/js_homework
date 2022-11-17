// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
//     console.log((a + b) * 2)
// }
// square(20, 30);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const circle = (r) => Math.PI * Math.pow(r, 2)
// console.log(circle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cylinder = (r, h) => Math.PI * Math.pow(r, 2) * h
// console.log(cylinder(5, 2))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let usersName = ['vasya', 'petya', 'olya', 'nastya'];
// function showName(massive) {
//     for (const name of usersName) {
//         console.log(name)
//     }
// }
// showName(usersName)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function P(text) {
//     document.write(`<p>${text}</p>`)
// }
// P('text but its paragraph')
// P('another text but its paragraph')
// P('smile another text but its paragraph :3')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulCreator(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`)
// }
// ulCreator('LOL')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulCreator2(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulCreator2('I am bed', '100')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = [false, true, 100500, 'elementText'];
// const element = function (array) {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// element(list)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const users = [
//     {id: 1, name: 'vasya', age: 28},
//     {id: 2, name: 'olya', age: 24},
//     {id: 3, name: 'max', age: 19},
//     {id: 4, name: 'dima', age: 32},
//     {id: 5, name: 'nastya', age: 27},
// ];
// function usersData(array) {
//     document.write(`<ul>`)
//     for (const arr of array) {
//         document.write(`<div>ID: ${arr.id}, Name: ${arr.name}, Age: ${arr.age}</div>`)
//     }
//     document.write(`</ul>`)
// }
// usersData(users)

// - створити функцію яка повертає найменьше число з масиву

// const numbers = [25, 23, 15, 48, 42, 31, 81,];
// function bigNumber(array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(bigNumber(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const numbers2 = [25, 23, 15, 48, 42, 31, 81,];
function sumOfNumbers(array) {
    let sum = 0;
    for (const num of array) {
        sum += num;
    }
    return sum;
}

console.log(sumOfNumbers(numbers2));