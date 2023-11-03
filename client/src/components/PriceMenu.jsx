import {useState} from 'react'

const PriceMenu = () => {

    const [priceOpen, setPriceOpen] = useState(false);
    const [sliderValue, setSliderValue] = useState(1);

    const handleChange = (e) => {
        // const {name, value} = e.target
        // console.log(e.target.value);
        setSliderValue(e.target.value);
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>Price</h5>
                {
                    priceOpen ?
                    <button className='category-btn' onClick={() => setPriceOpen(!priceOpen)}>-</button> :
                    <button className='category-btn' onClick={() => setPriceOpen(!priceOpen)}>+</button>
                }
            </div>
            <div>
            {
                priceOpen ?
                <div className='slider-parent'>
                    <input type="range" min="1" max="1000" name='sliderPrice' value={sliderValue} onChange={handleChange} />
                    <div className='bubble'>
                        {sliderValue}
                    </div>
                </div>: <></>
            }
            </div>
            <hr />
        </div>

    )
}

export default PriceMenu
