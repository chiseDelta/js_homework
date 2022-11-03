// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let randomElements = [7, true, false, 'coffee', 'rickroll', '3.14', 314, false, [0, 1, 2, 3], 'rE']; // [] - масив
console.log(randomElements);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = { // {} - об'єкт
    title: 'Harry Potter and the Order of the Phoenix',
    pageCount: 766,
    genre: 'Fantasy'
}

let book2 = {
    title: 'A History of the Modern World (9th Edition)',
    pageCount: 1248,
    genre: 'History'
}

let book3 = {
    title: 'Minecraft: Guide to Survival',
    pageCount: 96,
    genre: 'Guide'
}
console.log(book1, book2, book3);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let newBook1 = {
    title: 'Гарри Поттер и философский камень',
    pageCount: 319,
    genre: 'Фентези',
    authors: [{
        name: 'Джоан Роулінг',
        age: 57
    }]
}

let newBook2 = {
    title: 'Lorem ipsum',
    pageCount: 123,
    genre: 'Наукова фантастика',
    authors: [{
        name: 'Дядя Саня',
        age: 77
    }]
}

let newBook3 = {
    title: 'Идеальный программист',
    pageCount: 224,
    genre: 'Гайд',
    authors: [{
        name: 'Роберт Мартин',
        age: 70
    }]
}

console.log(newBook1, newBook2, newBook3);