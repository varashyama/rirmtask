export const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const readData = (key) => {
   const value = localStorage.getItem(key);
   return JSON.parse(value);
}

export const removeData = (key) => {
    localStorage.removeItem(key);
}
