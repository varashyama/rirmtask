import { USERS } from "./constants";
import { saveData } from "./storage-adaptar";

export const seedData = () => {
    const mailContent = [
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
        { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    ];


    USERS.forEach(({ inboxKey, sentKey }, i) => {
        saveData(inboxKey, mailContent.map(x => Object.assign(x, { name: `${x.name} ${i + 1}`})));
        saveData(sentKey, mailContent.map(x => Object.assign(x, { name: `Ayya Smith ${i + 1}`})));
    });


}