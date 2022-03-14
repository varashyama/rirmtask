import './compose_box.css';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import { USERS } from '../../services/constants';

const ComposeBox = ({ toggleCompose }) => {
    const { user } = useContext(userContext);
    const [getUser, setGetUser] = useState({});


    useEffect(() => {
        const usersData = USERS.find((i) => {
            return user.email !== i.email;

        })
        console.log(usersData);
        setGetUser(usersData);


    }, [user])

    return (
        <section className="rounded compose_box bg-white border">
            <div className="d-flex justify-content-between bg-dark text-white ">
                <p className="ps-2 pt-2">New Message</p>
                <button onClick={() => toggleCompose(false)}><i className="bg-dark bi bi-x"></i></button>
            </div>
            <div className="container-fluid">
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="from" placeholder="To" value={user.email} readOnly></input>
                </div>
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="to" placeholder="To" value={getUser.email} readOnly></input>
                </div>
                <div>
                    <input className="w-100 border-0 border-bottom py-2" type="text" name="cc" placeholder="Cc" disabled></input>
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