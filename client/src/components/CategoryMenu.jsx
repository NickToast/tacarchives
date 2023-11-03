import {useState} from 'react'

const CategoryMenu = ({getAllPins, disneyPins, animePins, hpPins, sonnyAngelPins, smiskiPins, otherPins}) => {

    const [categoryOpen, setCategoryOpen] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold m-0'>Category</h5>
                {
                    categoryOpen ? 
                    <button className='category-btn' onClick={() => setCategoryOpen(!categoryOpen)}>-</button> : 
                    <button className='category-btn' onClick={() => setCategoryOpen(!categoryOpen)}>+</button>
                }
                {/* {categoryOpen && props.children} */}
            </div>
            <div>
                {
                    categoryOpen ? 
                    <ul>
                        <li><button className="category-filter" onClick={getAllPins}>All</button></li>
                        <li><button className="category-filter" onClick={disneyPins}>Disney</button></li>
                        <li><button className="category-filter" onClick={animePins}>Anime</button></li>
                        <li><button className="category-filter" onClick={hpPins}>Harry Potter</button></li>
                        <li><button className="category-filter" onClick={sonnyAngelPins}>Sonny Angel</button></li>
                        <li><button className="category-filter" onClick={smiskiPins}>Smiski</button></li>
                        <li><button className="category-filter" onClick={otherPins}>Other</button></li>
                    </ul> : <></>
                }
            </div>
            <hr />
            {/*
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>Plating</h5>
                <button className='category-btn'>+</button>
            </div> */}
        </div>
    )
}

export default CategoryMenu
