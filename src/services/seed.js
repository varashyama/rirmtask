import { INBOX_MAILS } from "./constants";
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


    saveData(INBOX_MAILS, mailContent);
}