import { INBOX_MAILS } from "./constants"
import { readData } from "./storage-adaptar"


export const getInboxEmails = () => {
    return readData(INBOX_MAILS);
}