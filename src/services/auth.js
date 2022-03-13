import { USERS } from "./constants";


const users = USERS;

export const login = (username, password) => {

    const user = users.find((i) => i.email === username);

    let result = user && user.password === password ? user : false;

    return result;

}