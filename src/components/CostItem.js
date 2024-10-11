import './CostItem.css'

function CostItem(props) {

    let month = props.date.toLocaleString('ua-UA', {month: "long"});
    let year = props.date.getFullYear()
    let day = props.date.toLocaleString('ua-UA', {day: "2-digit"});
    return (
        <div className='cost-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>
                    ${props.amount}
                </div>
            </div>
        </div>
    );
}

export default CostItem;
