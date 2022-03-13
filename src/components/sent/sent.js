import { getSentEmails } from "../../services/mail";
import AppShell from "../app-shell/app_shell";
import Compose from "../compose/compose";
import MailListItem from "../mail-list-item";
import { useContext } from "react";
import { userContext } from "../../App";

const Sent = () => {
    const { user } = useContext(userContext);
    const mailContent = getSentEmails(user.sentKey);

    if (!user) {
        return (<div>
            <p>Please login to proceed further <a href="/">Login</a></p>
        </div>)
    }


    return (
        <AppShell>
            <div className="container-fluid pt-4 bg-light h-100">
                <div className="row">
                    <section className="col-12 col-md-4 col-lg-3">
                        <Compose />
                    </section>
                    <section className="col-12 col-md-8 bg-white">
                        <section className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>Sent</h4>
                                <div className="d-flex mt-4">
                                    <button className="bg-white border me-1"> <i className="me-1 bi bi-arrow-repeat"></i>Refresh</button>
                                    <div className="bg-white border me-1">
                                        <i className="bi bi-eye-fill p-1"></i>
                                    </div>
                                    <div className="bg-white border me-1">
                                        <i className="bi bi-exclamation p-1"></i>
                                    </div>
                                    <div className="bg-white border">
                                        <i className="bi bi-trash p-1"></i>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className="d-flex">
                                    <input className="form-control  w-100" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn text-white bg-success" type="submit">Search</button>
                                </div>
                                <div className="d-flex mt-3 justify-content-end">
                                    <div className="bg-white border">
                                        <i className="bi bi-arrow-left p-1"></i>
                                    </div>
                                    <div className="bg-white border">
                                        <i className="bi bi-arrow-right p-1"></i>
                                    </div>

                                </div>
                            </div>

                        </section>
                        <div className="mt-4">
                            {mailContent.map((i, index) => (
                                <MailListItem isFirst={index === 0} key={index} name={i.name} content={i.content} date={i.date} />
                            ))}
                        </div>

                    </section>
                </div>
            </div>
        </AppShell>
    )

}

export default Sent;