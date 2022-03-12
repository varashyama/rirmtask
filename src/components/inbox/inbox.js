import MailListItem from "../mail-list-item";

const mailContent = [
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },
    { name: "Anna Smith", content: "lorem ipsum dolor set", date: "02/03/2022" },

];

const Inbox = () => {
    return (
       <>
        <section className="d-flex justify-content-between align-items-center">
                <div>
                    <h4>Inbox</h4>
                    <div className="d-flex mt-4">
                        <button className="bg-white border me-1"> <i className="me-1 bi bi-arrow-repeat"></i>Refresh</button>
                        <div className="bg-white border me-1">
                            <i class="bi bi-eye-fill p-1"></i>
                        </div>
                        <div className="bg-white border me-1">
                            <i class="bi bi-exclamation p-1"></i>
                        </div>
                        <div className="bg-white border">
                            <i class="bi bi-trash p-1"></i>
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
                            <i class="bi bi-arrow-left p-1"></i>
                        </div>
                        <div className="bg-white border">
                            <i class="bi bi-arrow-right p-1"></i>
                        </div>

                    </div>
                </div>

            </section>
            <div className="mt-4">
                {mailContent.map((i,index) => (
                        <MailListItem isFirst={index === 0} key={index} name={i.name} content={i.content} date={i.date} />
                ))}
            </div>
       </>
    )
}

export default Inbox;