import './compose.css';
import { useState } from 'react';
import ComposeBox from '../compose_box';


const categories = [
    { color: '#00b494', text: 'Work' },
    { color: '#f2524d', text: 'Documents' },
    { color: '#0f83c9', text: 'Social' },
    { color: '#07c6c9', text: 'Advertising' },
    { color: '#faad50', text: 'Clients' },
];



const labels = [
    'Family',
    'Work',
    'Home',
    'Children',
    'Holidays',
    'Music',
    'Photography',
    'Film',
];


const Labels = () => {
    return (
        <section className="mt-3 ">
            <h5 className="compose-section-menu-hd fw-normal">Labels</h5>
            <div className="label-list">
                {
                    labels.map((text) => (
                        <div key={text} className="d-inline-block bg-white p-1 border mx-2 mb-1">
                            <i className="bi bi-tag-fill"></i>
                            <a className="ms-1" href="/">{text}</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}


const CategoriesSection = () => {
    return (
        <section className="mt-3 ">
            <h5 className="compose-section-menu-hd fw-normal">Folders</h5>
            <div className="categories-list">
                {
                    categories.map(({ color, text }) => (
                        <div key={text} className="d-flex py-1 align-items-center ">
                            <div style={{ background: color }} className="category-color-indicator"></div>
                            <a className="ms-2" href="/">{text}</a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}




const Compose = () => {
    const [composebox, setComposebox] = useState(false);

    return (
        <div className="px-4 compose-menu-container">
            <div className="text-center">
                <button className="px-5 w-100 py-2 text-center text-white rounded border-0 bg-success" onClick={() => setComposebox(true)} >Compose Mail</button>
            </div>

            {/* Folders */}
            <section className="mt-3 ">
                <h5 className="compose-section-menu-hd fw-normal">Folders</h5>
                <div className="folders_mail">
                    <div>
                        <a href="/"> <i className="bi bi-inbox-fill me-2"></i>Inbox</a>
                    </div>
                    <div>
                        <a href="/"> <i className="bi bi-envelope me-2"></i>Sent Mail</a>
                    </div>
                    <div>
                        <a href="/"><i className="bi bi-star-fill me-2"></i>Important</a>
                    </div>
                    <div>
                        <a href="/"> <i className="bi bi-file-earmark-text me-2"></i>Drafts</a>
                    </div>
                    <div>
                        <a href="/"> <i className="bi bi-trash me-2"></i>Trash</a>
                    </div>

                </div>
            </section>

            <CategoriesSection />

            <Labels /> 

            {composebox && <ComposeBox toggleCompose={setComposebox} />}

        </div>

    )
}

export default Compose;