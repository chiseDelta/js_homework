// - Є масив
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// * Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту *
// const simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// for (const simpson of simpsons) {
//     const {name, surname, age, info, photo} = simpson
//
//     let div = document.createElement('div')
//     div.classList.add('member')
//
//     let simpsonDiv = document.createElement('div')
//     simpsonDiv.innerText = `Імя: ${name} ${surname}, ${age} років. ${info}`
//
//     let simsonImg = document.createElement('img')
//     simsonImg.src = photo
//
//     div.append(simpsonDiv, simsonImg)
//     document.body.append(div)
// }

// Цикл в циклі - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const item of coursesArray) {
//     let coursesDiv = document.createElement('div');
//
//     let title = document.createElement('div')
//     title.innerHTML = `<b>${item.title}</b>`
//
//     let monthDuration = document.createElement('div')
//     monthDuration.innerText = `Тривалість: ${item.monthDuration} місяців`
//
//     let hourDuration = document.createElement('div')
//     hourDuration.innerText = `Тривалість часу: ${item.hourDuration} год.`
//
//     let ul = document.createElement('ul')
//
//     for (const mItem of item.modules) {
//         let li = document.createElement('li')
//         li.innerText = `${mItem}`
//         ul.appendChild(li)
//     }
//
//     document.body.appendChild(coursesDiv)
//     coursesDiv.append(title, monthDuration, hourDuration, ul)
// }

// - Cтворити блок,
//     - додати йому класи wrap, collapse, alpha, beta
//     - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//     - додати цей блок в body.
//     - клонувати його повністю, та додати клон в body.
//
// let div = document.createElement('div');
// div.innerText = 'Hello Okten';
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// div.style.background = 'cornflowerblue';
// div.style.color = 'snow';
// div.style.fontSize = '72px';
//
// document.body.appendChild(div);
// document.body.appendChild(div.cloneNode(true));

// - Є масив: ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та
// додає його до блоку .menu        * ! Завдання робити через цикли ! *
//
// const words = ['Main', 'Products', 'Among us', 'Contacts'];
// let findClass = document.getElementsByClassName('menu')[0];
//
// for (const word of words) {
//     let li = document.createElement('li')
//     li.innerText = `${word}`
//     findClass.append(li)
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerHTML = `<b>${item.title}</b> - Тривалість: ${item.monthDuration} місяців.`
//     document.body.appendChild(div)
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу. * ! Завдання робити через цикли ! *
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const item of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${item.title}`;
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `Тривалість: ${item.monthDuration} місяців.`;
//
//     div.append(h1, p);
//     document.body.appendChild(div);
// }

// - Створити довільний елемент з id = text.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let div = document.createElement('div');
// div.innerText = 'Hello Okten =D';
// div.setAttribute('id', 'text');
//
// let button = document.createElement('button');
// button.innerText = "Can't Touch Me!"
//
// document.body.append(div, button);
//
// button.onclick = function () {
//     div.style.display = 'none';
//     let msg = document.createElement('h1');
//     msg.innerText = 'Hello Okten исчез LOL'
//     document.body.appendChild(msg)
// }

// - Cтворити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
//
// let input = document.createElement('input');
// let confirm = document.createElement('button');
// confirm.innerText = '* CONFIRM *';
//
// document.body.append(input, confirm);
//
// confirm.onclick = () => {
//     input.oninput;
//     if (input.value < 18) {
//         alert('BABY MAN!')
//     } else if (input.value >= 18) {
//         let img = document.createElement('img');
//         img.src = 'https://pbs.twimg.com/media/FSVP6-YWUAAQ0Jv?format=jpg&name=900x900';
//         document.body.appendChild(img);
//     }
// }

// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк. При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
//
// let input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Кнопка';
//
// document.body.append(input1, input2, input3, button);
//
// button.onclick = () => {
//     let value1 = input1.value;
//     let value2 = input2.value;
//     let value3 = input3.value;
//
//     const generator = (raws, columns, word) => {
//         let table = document.createElement('table');
//         table.style.border = '2px solid gray';
//         document.body.appendChild(table);
//
//         for (let i = 0; i < raws; i++) {
//             let raw = document.createElement('tr');
//             table.appendChild(raw);
//
//             for (let j = 0; j < columns; j++) {
//                 let column = document.createElement('td');
//                 column.innerText = `${word}`
//                 column.style.border = '2px solid black'
//                 raw.appendChild(column)
//             }
//         }
//     }
//     generator(value1, value2, value3);
// }

/* Якщо ти читаєш або переглядяєш цей код, тоді хотілось би тобі побажати: Щастя, здоровя, терпіння, часу і чистого
 коду ;) */