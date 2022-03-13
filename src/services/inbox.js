import { INBOX_MAILS } from "./constants"
import { readData } from "./storage-adaptar"


export const getInboxEmails = (logedin_key) => {
    return readData(logedin_key);
}