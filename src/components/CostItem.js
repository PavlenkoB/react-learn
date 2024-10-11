import './CostItem.css'

function CostItem() {
    return (
        <div className='cost-item'>
            <div>03 2021 12</div>
            <div className='cost-item__description'>
                <h2>Freezer</h2>
                <div className='cost-item__price'>$999.99</div>
            </div>
        </div>
    );
}

export default CostItem;
