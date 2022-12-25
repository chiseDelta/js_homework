// Зробити файл index.html
// З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// Вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const div = document.createElement('div');
document.body.appendChild(div);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.innerText = `ID: ${user.id}, Ім'я: ${user.name} => `
            div.appendChild(userDiv);

            const anchor = document.createElement('a');
            anchor.innerText = 'Details';
            userDiv.appendChild(anchor);
            anchor.href = `details.html?data=${user.id}`
        }
    });