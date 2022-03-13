import { SENT_MAILS } from "./constants";
import { readData } from "./storage-adaptar"

export const getSentEmails = () => {
    return readData(SENT_MAILS);
}