/*
Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/

// let x = 77;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }

/*
Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
 */

// let time = +prompt('Write a number 0-59')
// if (time >= 0 && time <= 15) {
//     console.log('Перша четверть години')
// } else if (time >= 16 && time <= 30) {
//     console.log('Друга четверть години')
// } else if (time >= 31 && time <= 45) {
//     console.log('Третя четверть години')
// } else if (time >= 46 && time <= 59) {
//     console.log('Четверта четверть години')
// } else {
//     console.log('Шо?')
// }

/*
У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
 */

// let day = +prompt('Write a number 1-31')
// if (day >= 1 && day <= 10) {
//     console.log('Перша декада')
// } else if (day >= 11 && day <= 20) {
//     console.log('Друга декада')
// } else if (day >= 21 && day <= 31) {
//     console.log('Третя декада')
// } else {
//     console.log('Шо?')
// }

/*
Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
 */

// let week = +prompt('Write a number 1-7')
// switch (week) {
//     case 1 :
//         console.log('Monday');
//         break;
//     case 2 :
//         console.log('Tuesday');
//         break;
//     case 3 :
//         console.log('Wednesday');
//         break;
//     case 4 :
//         console.log('Thursday');
//         break;
//     case 5 :
//         console.log('Friday');
//         break;
//     case 6 :
//         console.log('Saturday');
//         break;
//     case 7 :
//         console.log('Sunday');
//         break;
//     default :
//         console.log('Шо?');
// }

/*
Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно
 врахувати коли введені рівні числа.
 */

// let number1 = +prompt('Write a number');
// let number2 = +prompt('Write a second number');
// if (number1 > number2) {
//     console.log(number1)
// } else if (number1 < number2) {
//     console.log(number2)
// } else if (number1 === number2) {
//     console.log('Числа однакові')
// } else {
//     console.log('Шо?')
// }

/*
Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
 */

// let x = +prompt() || 'default';
// console.log(x);