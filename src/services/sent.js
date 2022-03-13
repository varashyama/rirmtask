import { SENT_MAILS } from "./constants";
import { readData } from "./storage-adaptar"

export const getSentEmails = (logedin_key) => {
    return readData(logedin_key);
}