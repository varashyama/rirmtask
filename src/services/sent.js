import { SENT_MAILS } from "./constants";
import { readData, saveData } from "./storage-adaptar";
import { USERS } from "./constants";


export const getSentEmails = (logedin_key) => {
    return readData(logedin_key);
}

export const sendMail = (from, to, mail) => {

    const f = USERS.find((i) => i.email === from);
    const t = USERS.find((i) => i.email === to);

    const sentMailsOfFromUser = readData(f.sentKey);
    const inboxOfToUser = readData(t.inboxKey);
    sentMailsOfFromUser.unshift(mail)
    inboxOfToUser.unshift(mail)

    saveData(f.sentKey,sentMailsOfFromUser);
    saveData(t.inboxKey,inboxOfToUser);

}