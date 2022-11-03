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

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Anna', username: 'Anya2007', password: 'anya2007'},
    {name: 'Petro', username: 'ProPetro', password: 'hello2016'},
    {name: 'Max', username: 'Maxutka98', password: 1234567890},
    {name: 'Nikita', username: 'Nikit0s', password: 'qwerty'},
    {name: 'Vitaliy', username: 'VityaYT', password: 'welcomeyoutube321'},
    {name: 'Zhenya', username: 'ZELO', password: 'QWERTY-CAPS'},
    {name: 'Dima', username: 'DDoS', password: 'password'},
    {name: 'Stefani', username: 'Stefani', password: 1111},
    {name: 'Sophia', username: 'FlySophia', password: 'password1'},
    {name: 'Maria', username: 'Marii', password: 'marii'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);