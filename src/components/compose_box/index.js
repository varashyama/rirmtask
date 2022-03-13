import './compose_box.css';

const ComposeBox = ({toggleCompose}) => {

    return (
        <section className="rounded compose_box bg-white border">
            <div className="d-flex justify-content-between bg-dark text-white">
                <p>New Message</p>
                <button onClick={() => toggleCompose(false)}><i className="text-dark bi bi-x"></i></button>
            </div>
            <div className="container-fluid">
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="to" placeholder="To"></input>
                </div>
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="cc" placeholder="Cc"></input>
                </div>
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="subject" placeholder="Subject"></input>
                </div>
                <div className="mt-4">
                    <textarea className="w-100 body_text border"></textarea>
                </div>
                <div className="composebox_sendbtn mb-5">
                    <button className="bg-primary text-white px-4 py-2 rounded border-0">send</button>
                </div>
            </div>


        </section>
    )
}

export default ComposeBox;