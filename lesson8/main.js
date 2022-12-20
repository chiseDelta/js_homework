// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const user1 = new User(344, 'vasya', 'petrovich', 'vas.email@gmail.com', 2022);
const user2 = new User(777, 'anna', 'petrovich', 'ann.email@gmail.com', 1023);
const user3 = new User(672, 'maks', 'petrovich', 'mak.email@gmail.com', 8835);
const user4 = new User(281, 'katya', 'petrovich', 'kat.email@gmail.com', 3535);
const users = [];
users.push(user1, user2, user3, user4);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти
// з парними id (filter)

const filterID = users.filter(value => value.id % 2 === 0);
// console.log(filterID);

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortID = users.sort((a, b) => a.id - b.id);
// console.log(sortID);

// - Cтворити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// - Cтворити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

const client1 = new Client(344, 'vasya', 'petrovich', 'vas.email@gmail.com', 2022, ['apple', 'milk', 'eggs', 'juice']);
const client2 = new Client(777, 'anna', 'petrovich', 'ann.email@gmail.com', 1023, ['apple', 'milk', 'eggs']);
const client3 = new Client(672, 'maks', 'petrovich', 'mak.email@gmail.com', 8835, ['apple', 'milk', 'eggs', 'juice', 'chicken', 'ice', 'bread']);
const client4 = new Client(281, 'katya', 'petrovich', 'kat.email@gmail.com', 3535, ['apple', 'milk', 'eggs', 'juice', 'chicken', 'ice']);
const clients = [];
clients.push(client1, client2, client3, client4);
// console.log(clients);

const sortOrder = clients.sort((a, b) => b.order.length - a.order.length);
// console.log(sortOrder);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//      -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear (newValue) - змінює рік випуску на значення newValue
//      -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
//          і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${maxSpeed}KM на годину`);
    }

    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function') {
                console.log(`${carKey}: ${this[carKey]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
        console.log(`Встановлена нова максимальна швидкість ${this.model}: ${newSpeed}КМ/Ч`)
    }

    this.changeYear = function (newValue) {
        this.year += newValue
        console.log(`Встановлений новий рік випуску ${this.model}: ${newValue}р.`)
    }

    this.addDriver = function (driverObj) {
        this.driverObj = driverObj
    }

}

const car1 = new Car('Toyota', 'Japan', 2016, 260, 3.2);

// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(300);
// car1.changeYear(2018);
// car1.addDriver({name: 'vasya', age: 25, license: true});
// console.log(car1);

// - Cтворити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
//      -- Створити масив з 10 попелюшок.
//      -- Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//      -- За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//      -- Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.

function CinderellaCreate(name, age, footSize) {
    this.name = name
    this.age = age
    this.footSize = footSize
}

const cinderella1 = new CinderellaCreate('katya', 24, 35);
const cinderella2 = new CinderellaCreate('nastya', 30, 41);
const cinderella3 = new CinderellaCreate('masha', 22, 28);
const cinderella4 = new CinderellaCreate('sonya', 28, 32);
const cinderella5 = new CinderellaCreate('anna', 26, 31);
const cinderella6 = new CinderellaCreate('sofia', 23, 33);
const cinderellaArray = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6];

class Prince {
    constructor(name, age, findTufla) {
        this.name = name;
        this.age = age;
        this.findTufla = findTufla;
    }
}

const prince = new Prince('vasya', 31, 41);
const findCinderella = (arr, prince) => {
    for (const item of arr) {
        if (item.footSize === prince.findTufla) {
            console.log(`Туфля підійшла попелюшці: ${item.name}`)
        }
    }
}
// findCinderella(cinderellaArray, prince);

// cinderellaArray.find(value => {
//     if (value.footSize === prince.findTufla) {
//         console.log(`Туфля підійшла попелюшці: ${value.name}`)
//     }
// })