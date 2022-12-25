const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(users => {
        for (const user in users) {
            const userDiv = document.createElement('div');
            if (typeof users[user] !== 'object') {
                userDiv.innerText = `${user}: ${users[user]}`;
            } else {
                userDiv.innerText = `${user}:`;
                for (const key in users[user]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof users[user][key] !== 'object') {
                        userInnerDiv.innerText = `${key}: ${users[user][key]}`;
                    } else {
                        userInnerDiv.innerText = `${key}: `;
                        for (const elem in users[user][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof users[user][key][elem] !== 'object') {
                                htmlDivElement.innerText = `${elem}: ${users[user][key][elem]}`;
                            }
                            userInnerDiv.appendChild(htmlDivElement);
                        }
                    }
                    userDiv.appendChild(userInnerDiv);
                }
            }
            document.body.appendChild(userDiv);
        }
    });