
const users = [
    { name: 'Varalakshmi', email: 'vara@gmail.com', password: '123456' },
    { name: 'shyamala', email: 'shyama@gmail.com', password: '123456' },
]


export const login = (username, password) => {

    const isEmail = users.find((i) => i.email === username);

    let result = isEmail && isEmail.password === password ? isEmail : false;

    return result;

}