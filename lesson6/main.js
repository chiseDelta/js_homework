// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// function findLength(array) {
//     for (const item of array) {
//         console.log(item.length)
//     }
// }
// findLength(arr)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const item of arr) {
//     console.log(item.toUpperCase())
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (const item of arr) {
//     console.log(item.toLowerCase())
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.substring(1, 13));

// let clearString = str.replaceAll(' ', '')
// console.log(clearString);

// !!Перший варіант забирає зайві пробіли з переду і ззаду!!

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let array = ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
// function stringToArray(str) {
//     let join = str.join(' ')
//     console.log(join)
// }
// stringToArray(array)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let whySoManyNumbersHere = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(whySoManyNumbersHere.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// let nums = [11, 21, 3];
//
// function sortNums(arr, direction) {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a)
//     } else {
//         console.log('Wrong direction!')
//     }
//     return arr
// }
// console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filter = coursesAndDurationArray.filter(value => value.monthDuration >= 5);
// console.log(filter);

// описати колоду карт
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const suits = [
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
];
const cardNames = [6, 7, 8, 9, 10, 'ace', 'jack', 'queen', 'king', 'joker'];
const deck = [];
for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card);
    }
}
// console.log(deck);

// - знайти піковий туз
// let filter = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(filter);

// - всі шістки
// let filter = deck.filter(value => value.value === 6);
// console.log(filter);

// - всі червоні карти
// let filter = deck.filter(value => value.color === 'red');
// console.log(filter);

// - всі буби
// let filter = deck.filter(value => value.cardSuit === 'diamond');
// console.log(filter);

// - всі трефи від 9 та більше
// let filter = deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) || (value.cardSuit === 'clubs' && typeof value.value === 'string'));
// console.log(filter);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accumulator, value) => {
    if (value.cardSuit === 'spade') {
        accumulator.spades.push(value);
    }
    if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value);
    }
    if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value);
    }
    if (value.cardSuit === 'clubs') {
        accumulator.clubs.push(value);
    }
    return accumulator
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);