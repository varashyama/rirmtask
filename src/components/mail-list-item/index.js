import './mail-list-item.css';

const MailListItem = (props) => {
    
    return (
            <div className={`${props.isFirst && 'border-top'} mail-list-item row border-bottom`}>
                <div className="col-1 py-2">
                   <input type="checkbox"></input>
                </div>
                <div className="col-2">
                   <p className="my-2">{props.name}</p>
                </div>
                <div className="col-7">
                    <p className="my-2">{props.content}</p>
                </div>
                <div className="col-2">
                    <p className="my-2">{props.date}</p>
                </div>
            </div>

    )
}

export default MailListItem;