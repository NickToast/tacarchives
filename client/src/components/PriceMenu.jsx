import {useState} from 'react'

const PriceMenu = () => {

    const [priceOpen, setPriceOpen] = useState(false);

    return (
        <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>Price</h5>
                {
                    priceOpen ? 
                    <button className='category-btn' onClick={() => setPriceOpen(!priceOpen)}>-</button> : 
                    <button className='category-btn' onClick={() => setPriceOpen(!priceOpen)}>+</button>
                }
        </div>
    )
}

export default PriceMenu
